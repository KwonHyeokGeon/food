<template>
  <div>
    <NavCom></NavCom>
    <router-view youtube="youtube" />
    <FooterCom></FooterCom>
  </div>
</template>

<script>

import NavCom from './components/NavCom.vue';
import FooterCom from './components/FooterCom.vue';
import { auth } from './firebase';
export default {
  components: {
    NavCom,
    FooterCom
  },
  data() {
    return {
      displayName: localStorage.getItem("displayName"),
      uid: localStorage.getItem("uid"),
      // youtube: []
    }
  },
  mounted() {
    if (localStorage.getItem("refreshToken")) {
      this.$store.commit('loginState', { displayName: this.displayName, uid: this.uid })
    }
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('loginState', { displayName: user.displayName, uid: user.uid })
      }
    })
  },
  // created(){
  //   axios.get(`https://www.googleapis.com/youtube/v3/search?key=${this.Youtube_key}&part=snippet&type=video&q=${this.product[this.$route.params.id] + '레시피'}&maxResults=6`)
  //     .then((res) => {
        
  //       this.items = res.data.items
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }
}
</script>

<style></style>