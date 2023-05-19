<template>
  <div class="product-wrap">
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <ul class="flex flex-wrap w-full lg:w-1/2 mx-auto justify-around">
          <li v-for="el in month" :key="el" class="basis-1/6  text-center cursor-pointer text-lg" @click="selectMonth = el"><span class="px-8 py-0.5" :class="selectMonth === el && 'bg-vege-400 rounded-full text-white'">{{ el }}</span></li>
        </ul>
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
  <UserRecipeView></UserRecipeView>
</template>

<script>
import data from '@/assets/Data.json'
import UserRecipeView from './UserRecipeView.vue';
export default {
  data() {
    return {
      data: data,
      product: [],
      imgUrl: [],
      seasonItem: [],
      month: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      selectMonth: ''
    }
  },
  components: {
    UserRecipeView
  },
  methods: {
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
      const tmonth = today.getMonth()+1;
      this.selectMonth = tmonth+'월';
  },
}
</script>

<style></style>