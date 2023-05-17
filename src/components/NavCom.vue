<template>
  <div class="w-full mt-10">
    <div class="max-w-7xl mx-auto justify-between flex">



      <!-- logo -->
      <div class="basis-1/4">
        <router-link to="/"><img src="http://via.placeholder.com/120x50" alt="" /></router-link>
        
      </div>

      <!-- navigation bar -->
      <div class="basis-2/4 hidden lg:block">
        <ul class="basis-2/4 flex justify-between gap-x-[30px]" @mouseover="SubMenuOpen=true" @mouseout="SubMenuOpen=false">
          <li v-for="(e, index) in NavList[0]" :key="e" :class="NavSelectIndex==index && 'after:h-0.5 text-green-500'" class="shrink-0 hover:text-green-500 h-20 leading-[80px] relative after:absolute after:transition-all after:left-0 after:bottom-0 hover:after:h-1 font-extrabold">
            <router-link :to="NavList[1][index]">{{ e }} </router-link>
          </li>
        </ul>
      </div>

      <!-- 로그인 로그아웃 회원가입 -->
      <div class="basis-1/6 ml-5 hidden lg:block mt-8">
        <ul class="flex justify-center gap-x-[10%]">
          <li v-if="!$store.state.loginChk" class="font-extrabold"><router-link to="/login">로그인</router-link> </li>
          <li v-else @click="logout" class="font-extrabold"><router-link to="/">로그아웃</router-link></li>
          <li class="font-extrabold"><router-link to="/member">회원가입</router-link></li>
        </ul>
      </div>
    </div>
  </div>

  <div :class="SubMenuOpen && '!h-48'" class="transition-all duration-500 bg-yellow-300 rounded h-0 overflow-hidden z-50">
      <div class="flex right-24 ml-[490px]" @mouseover="SubMenuOpen=true" @mouseout="SubMenuOpen=false; NavSelectIndex=null">
        <ul @mouseover="NavSelectIndex=index" v-for="(e,index) in SubList" :key="e" class="ml-[210px] text-center">
          <li v-for="(el,i) in e" :key="el" class="hover:text-red-500 hover:scale-110 hover:font-extrabold"><router-link :to="SubMenuLink[index][i]">{{ el }}</router-link> </li>
            <!-- <li v-for="(el,i) in e" :key="el" class="hover:text-red-500"><router-link v-if="index != 0" :to="SubMenuLink[index][i]">{{ el }}</router-link> </li> -->
            <!-- <li v-for="(el,i) in e" :key="el" class="hover:text-red-500"><router-link :to="index != 0 && SubMenuLink[1][0]">{{i}}{{ el }}</router-link> </li> -->
            <!-- <li v-for="(el) in e" :key="el" class="hover:text-red-500">{{ el }}</li> -->
          </ul>
      </div>
  </div>

  <!-- 햄버거 -->
  <div  class="absolute right-4 lg:hidden top-0 z-50 pt-5" @click="isOpen == true ? isOpen=false : isOpen=true">
        <div v-for="e in 3" :key="e" class="h-1 w-7 bg-black rounded transition-all duration-500 m-1.5 top-5" :class="isOpen && 'bg-red-500'"></div>
    </div>
  <!-- 햄버거 끝! -->

  <!-- 우측 hidden 메뉴 -->
  <div :class="isOpen && '!right-0'" class="w-80 bg-gray-500 h-full z-30 fixed top-0 transiton-all duration-500 -right-80 lg:hidden">
    sdklfj;slkdjf;lksjd;lfj
    sdlkfjlsdkjflkjsdlfk


    
  </div>


</template>

<script>
import Nav from '../assets/Nav.json'
import { auth } from '../firebase'
export default {
  name: "NavCom",
  data() {
    return {
      NavList: Nav.Nav,
      isOpen:false,
      SubList:Nav.SubMenu,
      SubMenuOpen:false,
      NavSelectIndex:null,
      SubMenuLink:Nav.SubLink




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