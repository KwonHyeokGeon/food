<template>
  <div>
    커뮤니티
    <router-view></router-view>
    <UserRecipeView></UserRecipeView>
  </div>
</template>

<script>
import UserRecipeView from '../Product/UserRecipeView.vue';
export default {
  components: {
    UserRecipeView
  }
}
</script>

<style></style>