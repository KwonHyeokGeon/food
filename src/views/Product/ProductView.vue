<template>
  {{ seasonItem }}
  <div class="product-wrap">
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          <div class="w-full" v-for="(e, idx) in product" :key="e">
            <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 relative">
              <router-link :to="{ name: 'productDetail', params: { id: idx } }">
                <img v-lazy="imgUrl[idx]" :alt="product[idx]"
                  class="w-80 h-60 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </router-link>
            </div>
            <h1 class="w-full h-1 my-4 bg-gray-200 rounded-lg dark:bg-gray-700">{{ e }}</h1>
            <p class="w-full h-1 my-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
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
      imgUrl: [],
    }
  },
  components: {
    UserRecipeView
  },
  methods: {
  },
  created() {
    for (let i in this.data.Grid_20171128000000000572_1.row) {
      this.product.push(this.data.Grid_20171128000000000572_1.row[i].PRDLST_NM)
      this.imgUrl.push(this.data.Grid_20171128000000000572_1.row[i].IMG_URL)
    }
  },
  mounted() {

  },
}
</script>

<style></style>