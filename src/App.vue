<template>
  <div>
    <NavCom></NavCom>
    <router-view />
    <FooterCom></FooterCom>
  </div>
</template>

<script>
// import axios from 'axios'
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
}
</script>

<style></style>