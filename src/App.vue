<template>
  <div>
    <NavCom></NavCom>
    <router-link to="/product">상품</router-link>
    <router-link to="/community">커뮤니티</router-link>
    <router-view />
    <FooterCom></FooterCom>
  </div>
</template>

<script>
import NavCom from './components/NavCom.vue';
import FooterCom from './components/FooterCom.vue';
export default {
  components:{
    NavCom,
    FooterCom
  }
}
</script>

<style></style>