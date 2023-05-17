<template>
  <div class="w-full mt-10">
    <div class="max-w-7xl mx-auto justify-between flex">

      <!-- logo -->
      <div class="basis-1/4">
        <img src="http://via.placeholder.com/120x50" alt="">
      </div>

      <!-- navi bar -->
      <div class="basis-2/4">
        <ul class="basis-2/4 flex justify-between gap-x-[30px]">
          <li v-for="(e, index) in NavList[0]" :key="e">
            <router-link :to="NavList[1][index]">{{ e }} </router-link>
          </li>
        </ul>
      </div>

      <!-- login bar -->
      <!-- <ul class="ml-10 basis-1/4 flex justify-between gap-x-12">
          <li>로그인</li>          
          <p>로그아웃</p>          
          <p>회원가입</p>          
        </ul> -->
      <div class="basis-1/6 ml-5">
        <ul class="flex justify-center gap-x-[2%]">
          <li v-if="!$store.state.loginChk"><router-link to="/login">로그인</router-link> </li>
          <li v-else @click="logout"><router-link to="/">로그아웃</router-link></li>
          <li><router-link to="/member">회원가입</router-link></li>
        </ul>

      </div>

    </div>
  </div>
</template>

<script>
import NavData from '../assets/Nav.json'
import { auth } from '../firebase'
export default {
  name: "NavCom",
  data() {
    return {
      NavList: NavData.Nav

    }
  },
  methods: {
    logout() {
      auth.signOut();
      this.$store.commit('logOutToken')
    }
  }
}
</script>

<style>
li {
  list-style: none;
}
</style>