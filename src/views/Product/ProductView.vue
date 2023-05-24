<template>
  <div class="product-wrap pt-20 md:pt-0">
    <section>
      <div class="container px-6 py-10 mx-auto">
        <ul class="flex flex-wrap w-full lg:w-1/2 mx-auto justify-around 
        ">
          <li v-for="el in month" :key="el"
            class="basis-1/6 text-center cursor-pointer text-base flex flex-wrap justify-center items-center"
            @click="selectMonth = el"><span class="px-2 box-border w-20 py-0.5"
              :class="selectMonth === el && 'bg-vege-400 rounded-full text-white'">{{ el }}</span></li>
        </ul>
        <div class="max-w-2xl mx-auto m-4 p-2 flex justify-center items-center relative z-20"><input type="text"
            class="rounded-full p-4 text-lg transition-all duration-700" :class="detailModal ? 'w-full border' : 'w-0'"
            v-model="search" @keyup.enter="searchValid(); productValid = true"><img
            :src="require(`@/assets/img/magnify.png`)" alt="검색"
            class="w-8 absolute transition-all translate-x-1/2 duration-700"
            @click="!detailModal ? detailModal = !detailModal : searchValid()"
            :class="detailModal ? 'right-10' : 'right-1/2'">
          <img :src="require(`@/assets/img/cancel.png`)" alt="닫기"
            class="w-6 absolute top-0 -right-5 bg-white rounded-full p-1" :class="detailModal ? 'block' : 'hidden'"
            @click="detailModal = !detailModal">
        </div>
        <div v-if="detailModal" class="w-full h-screen fixed top-0 left-0 z-10"
          :class="detailModal === true ? 'bg-black bg-opacity-50' : 'bg-white'">
          <template v-for="(e, index) in product" :key="e">
            <div v-if="searchPdc === product[index]"
              class="w-80 border mx-auto p-4 flex flex-col justify-center bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg">
              <div class="w-full h-64 rounded-lg relative">
                <router-link :to="{ name: 'productDetail', params: { id: index } }">
                  <img v-lazy="imgUrl[index]" :alt="product[index]"
                    class="w-80 h-60 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </router-link>
              </div>
              <h1 class="my-1 font-bold text-lg">{{ e }}</h1>
              <p>{{ seasonItem[index] }}</p>
            </div>
          </template>
        </div>
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          <template v-for="(e, idx) in product" :key="e">
            <div class="w-full border p-3 rounded hover:bg-vege-200/20" v-if="selectMonth === seasonItem[idx]">
              <div class="w-full h-64 rounded-lg relative">
                <router-link :to="{ name: 'productDetail', params: { id: idx } }">
                  <img v-lazy="imgUrl[idx]" :alt="product[idx]"
                    class="w-80 h-60 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </router-link>
              </div>
              <h1 class="w-full my-1 font-bold text-lg">{{ e }}</h1>
              <p class="w-full">{{ seasonItem[idx] }}</p>
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import data from '@/assets/Data.json'
export default {
  data() {
    return {
      data: data,
      product: [],
      imgUrl: [],
      seasonItem: [],
      month: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      selectMonth: '',
      search: '',
      searchPdc: '',
      detailModal: false,
      productValid: false
    }
  },
  components: {
  },
  methods: {
    searchValid() {
      this.searchPdc = this.search
      // let text = false
      // this.product.forEach(el => {
      //   if(this.searchPdc !== el){
      //     text = true
      //     console.log(text);
      //   }else if(this.searchPdc === el){
      //     text = false
      //     return false
      //   }
      // });
      // if(text){
      //   alert('!')
      // }
    }
  },
  created() {
    for (let i in this.data.Grid_20171128000000000572_1.row) {
      this.seasonItem.push(this.data.Grid_20171128000000000572_1.row[i].M_DISTCTNS)
      this.product.push(this.data.Grid_20171128000000000572_1.row[i].PRDLST_NM)
      this.imgUrl.push(this.data.Grid_20171128000000000572_1.row[i].IMG_URL)
    }
  },
  mounted() {
    const today = new Date();
    const tmonth = today.getMonth() + 1;
    this.selectMonth = tmonth + '월';
  },
}
</script>

<style></style>