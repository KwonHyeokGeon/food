<template>
  <div class="product-wrap">
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          <div class="w-full" v-for="(e, idx) in product" :key="e">
            <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600">
              <img v-lazy="imgUrl[idx]" :alt="product[idx]"/>
            </div>
            <h1 class="w-full h-2 my-4 bg-gray-200 rounded-lg dark:bg-gray-700">{{ e }}</h1>
            <p class="w-full h-2 my-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          </div>
        </div>
      </div>
    </section>
  </div>


  <div class="recipe-wrap">
    recipe
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
      seasonItem: [],
      producingArea: [],
      effect: [],
      purchaseTip: [],
      imgUrl: [],
      recipe: [],
      ingredient: [],
      category: []
    }
  },
  components: {
    UserRecipeView
  },
  created() {
    // 반복문 돌려서 데이터에 배열형태로 담아뒀습니다. 
    for (let i in this.data.Grid_20171128000000000572_1.row) {
      this.product.push(this.data.Grid_20171128000000000572_1.row[i].PRDLST_NM)
      this.seasonItem.push(this.data.Grid_20171128000000000572_1.row[i].M_DISTCTNS)
      this.producingArea.push(this.data.Grid_20171128000000000572_1.row[i].MTC_NM)
      this.effect.push(this.data.Grid_20171128000000000572_1.row[i].effect)
      this.purchaseTip.push(this.data.Grid_20171128000000000572_1.row[i].PURCHASE_MTH)
      this.imgUrl.push(this.data.Grid_20171128000000000572_1.row[i].IMG_URL)
      this.recipe.push(this.data.Grid_20171128000000000572_1.row[i].COOK_MTH)
      this.ingredient.push(this.data.Grid_20171128000000000572_1.row[i].TRT_MTH)
      this.category.push(this.data.Grid_20171128000000000572_1.row[i].PRDLST_CL)
    }
  },
  mounted() {

  },
}
</script>

<style></style>