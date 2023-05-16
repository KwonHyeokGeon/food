<template>
  skjdhflksdjf;ljsd;lfljsd
  <div class="w-full">
      <div class="max-w-7xl mx-auto justify-between flex">
          
        <!-- logo -->
        <div class="basis-1/4">
             <img src="http://via.placeholder.com/120x50" alt="">
        </div>

        <!-- navi bar -->
        <div class="basis-2/4 border">
            <ul class="basis-2/4 flex justify-between gap-x-[30px]">
              <li  v-for="(e,index) in NavList[0]" :key="e" >
                      <router-link :to="NavList[1][index]">{{ e }} </router-link></li>
            </ul>
        </div>

        <!-- login bar -->
        <!-- <ul class="ml-10 basis-1/4 flex justify-between gap-x-12">
          <li>로그인</li>          
          <p>로그아웃</p>          
          <p>회원가입</p>          
        </ul> -->
        <div class="basis-1/6 ml-5 border">
            <ul class="flex justify-between gap-x-[5%] ">
                <li v-if="!$store.state.loginChk"><router-link to="/login">로그인</router-link> </li>
                <li v-else @click="logout"><router-link to="/">로그아웃</router-link></li>
                <li>회원가입</li>
            </ul>

        </div>

      </div>
  </div>
</template>

<script>
import NavData from '../assets/Data.json'
import {auth} from '../firebase'
  export default {
    name:"NavCom",
    data() {
      return {
        NavList:NavData.Nav

      }
    },
    methods :{
      logout(){
        auth.signOut();
        this.$store.commit('logOutToken')
      }
    }
  }
</script>

<style>
li{ list-style:none; }

</style>