<template>
  <div class="max-w-7xl mx-auto border rounded-lg">
    <ul class="my-4">
      <li><img :src="imgUrl[idx]" :alt="product[idx]" class="w-[80%] h-80 mx-auto"></li>
      <li>
        <h2>{{ product[idx] }}</h2>
      </li>
      <li>{{ category[idx] }}</li>
      <li>제철: {{ seasonItem[idx] }}</li>
      <li>산지: {{ producingArea[idx] }}</li>
      <li>효능: {{ effect[idx] }}</li>
      <li>레시피: {{ recipe[idx] }}</li>
      <li>손질방법: {{ ingredient[idx] }}</li>
    </ul>
    <div v-for="(e, index) in items" :key="index" class="border m-2 p-2 flex">
      <div>
        <a :href="`https://www.youtube.com/watch?v=${e.id.videoId}레시피`" target="_blank">
          <img :src="e.snippet.thumbnails.medium.url" alt="동영상" class="">
        </a>
      </div>
      <div class="">
        <p class="">{{ e.snippet.title }}</p>
        <p class="">{{ e.snippet.description }}</p>
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
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyANlyehJjunSG4LPmm0oT60XHDvzw2j3Uw&part=snippet&type=video&q=${this.product[this.$route.params.id]}`)
      .then((res) => {
        this.items = res.data.items
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  },
};
</script>

<style></style>