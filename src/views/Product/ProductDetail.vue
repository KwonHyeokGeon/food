<template>
  <div class="bg-vege-600 w-full mb-20 relative">
    <div class="max-w-7xl mx-auto flex flex-col pb-20 justify-center items-center">
      <h2 class="font-bold text-3xl sm:text-4xl relative pt-20 pb-4 text-white">{{ product[idx] }}
        <span class="w-20 h-[2px] bg-white absolute bottom-0 left-1/2 -translate-x-1/2 inline-block"></span>
      </h2>
    </div>
  </div>
  <div class="max-w-7xl mx-auto mb-5">
    <button class="bg-vege-200/50 hover:bg-vege-600/80 p-1 rounded-md text-sm font-bold" @click="goBack">↼ 이전으로 돌아가기</button>
  </div>
  <div class="max-w-7xl mx-auto flex flex-col sm:flex-row">
    <div class="basis-6/12 flex justify-center items-center">
      <img :src="imgUrl[idx]" :alt="product[idx]" class=" w-full h-80 border rounded-md object-cover">
    </div>
    <div class="flex flex-col basis-6/12 justify-center items-center gap-y-2">
      <h2 class="text-2xl font-bold text-center flex flex-col gap-y-2 mb-4 sm:mt-0 mt-5">{{ product[idx] }}<span
          class="inline-block w-full h-[2px] bg-black"></span></h2>
      <p class="w-48 flex justify-between text-[#7b7b7b] text-sm font-bold">분류: <span class="text-black">{{ category[idx]
      }}</span>
      </p>
      <p class="w-48 flex justify-between text-[#7b7b7b] text-sm font-bold flex-wrap">산지: <span class="text-black">{{
        producingArea[idx]
      }}</span></p>
      <p class="w-48 flex justify-between text-[#7b7b7b] text-sm font-bold">제철: <span class="text-black">{{
        seasonItem[idx]
      }}</span></p>
    </div>
  </div>
  <div class="max-w-5xl mx-auto flex">
    <ul>
      <li class="text-2xl font-bold my-10 px-1">효능 <p class="text-sm py-5"> {{ effect[idx] }}</p>
      </li>
      <li class="text-2xl font-bold my-10 px-1">손질방법 <p class="text-sm py-5"> {{ ingredient[idx] }}</p>
      </li>
      <li class="text-2xl font-bold my-10 px-1">레시피 <p class="text-sm py-5"> {{ recipe[idx] }}</p>
      </li>
    </ul>
  </div>
  <div class="max-w-5xl mx-auto mb-20">
    <h4 class="text-2xl font-bold my-10">레시피 영상</h4>
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-2">
      <div v-for="(e, index) in items" :key="index">
        <a :href="`https://www.youtube.com/watch?v=${e.id.videoId} 레시피`" target="_blank"
          class="flex flex-wrap justify-center relative" title="링크로 이동">
          <img :src="e.snippet.thumbnails.high.url" alt="동영상" class="rounded-md">
          <p class="absolute w-5/6 top-1 left-10 text-gray-300 line-clamp-1">{{ e.snippet.title }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/assets/Data.json'
import axios from 'axios'

export default {
  data() {
    return {
      data: data,
      idx: this.$route.params.id,
      seasonItem: [],
      producingArea: [],
      effect: [],
      purchaseTip: [],
      recipe: [],
      ingredient: [],
      imgUrl: [],
      category: [],
      product: [],
      items: ''
    };
  },

  created() {
    for (let i in this.data.Grid_20171128000000000572_1.row) {
      this.seasonItem.push(this.data.Grid_20171128000000000572_1.row[i].M_DISTCTNS)
      this.producingArea.push(this.data.Grid_20171128000000000572_1.row[i].MTC_NM)
      this.effect.push(this.data.Grid_20171128000000000572_1.row[i].EFFECT)
      this.purchaseTip.push(this.data.Grid_20171128000000000572_1.row[i].PURCHASE_MTH)
      this.recipe.push(this.data.Grid_20171128000000000572_1.row[i].COOK_MTH)
      this.ingredient.push(this.data.Grid_20171128000000000572_1.row[i].TRT_MTH)
      this.category.push(this.data.Grid_20171128000000000572_1.row[i].PRDLST_CL)
      this.imgUrl.push(this.data.Grid_20171128000000000572_1.row[i].IMG_URL)
      this.product.push(this.data.Grid_20171128000000000572_1.row[i].PRDLST_NM)
    }
  },
  mounted() {
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCR9mmHFr20k2bLtka2OX-zpj8zHotzHEg&part=snippet&type=video&q=${this.product[this.$route.params.id]}&maxResults=6`)
      .then((res) => {
        this.items = res.data.items
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  },
  methods: {
    goBack() {
      window.history.back()
    }
  },
};
</script>

<style></style>