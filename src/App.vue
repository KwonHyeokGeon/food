<template>
  <div>
    <NavCom></NavCom>
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