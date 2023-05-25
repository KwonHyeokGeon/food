<template>
  <!-- #1 lg 모드 -->
  <div class="hidden md:block">
    <div class="w-full z-20 bg-white">
      <div class="max-w-7xl mx-auto justify-center md:justify-between items-center flex py-1">
        <div class="flex">
          <div>
            <router-link to="/" @click="$store.state.navSelectIndex = 999"><img src="../assets/img/logo.png" alt="logo"
                class="w-20 sm:mx-auto md:mx-auto ml-10"></router-link>
          </div>
          <!-- Navigation bar -->
          <ul class="basis-2/4 hidden md:flex ml-20 gap-x-16 text-center" @mouseenter="SubMenuOpen = true">
            <li v-for="(e, index) in NavList[0]" :key="e"
            :class="NavSelectIndex == index && 'after:h-0.5 text-green-500' || index === $store.state.navSelectIndex && 'text-point font-extrabold'"
              class="shrink-0 hover:text-green-500 text-center h-20 leading-[80px] relative after:absolute after:transition-all after:left-0 after:bottom-0 hover:after:h-1 font-extrabold change">
              <router-link @click="$store.commit('NavSelectClick', index)" :to="NavList[1][index]">{{ e }} </router-link>
            </li>
            <li class="shrink-0 hover:text-green-500 text-center h-20 leading-[80px] relative after:absolute after:transition-all after:left-0 after:bottom-0 hover:after:h-1 font-extrabold change" :class="$store.state.adminUid === $store.state.uid ? 'block' : 'hidden'"><router-link to="/admin">관리자</router-link></li>
          </ul>
          <!-- <p v-if="$store.state.uid == $store.state.adminUid" class="absolute right-[500px] top-8"><router-link to="/admin">관리자페이지</router-link></p> -->



          <!-- 로그인 로그아웃 회원가입 -->
        </div>
        <div class="basis-1/6 hidden md:block ">
          <ul class="flex justify-center gap-x-[2%]">
            <li class="font-extrabold relative" v-if="!$store.state.loginChk"><router-link to="/login"><img
                  :src="require('@/assets/img/lock-solid.svg')" alt="lock " class="w-3 absolute mt-1 -ml-4">
                로그인</router-link> </li>
            <li class="font-extrabold relative flex" v-else @click="logout">
              <p class="mr-7 text-point">{{ $store.state.displayName }}<span class="pl-2 text-black">님</span></p>
              <router-link to="/"><img :src="require('@/assets/img/lock-solid.svg')" alt="lock"
                  class="w-3 absolute mt-1 -ml-5">로그아웃</router-link>
            </li>
            <li class="font-extrabold ml-7 relative" v-if="!$store.state.loginChk"><router-link to="/member"><img
                  :src="require('@/assets/img/user-solid.svg')" alt="user"
                  class="w-3 absolute mt-1 -ml-4">회원가입</router-link></li>
          </ul>
        </div>

      </div>
    </div>

    <div :class="SubMenuOpen && 'h-48'"
      class="transition-all duration-500 bg-point rounded h-0 overflow-hidden z-[9999] w-full absolute"
      @mouseleave="SubMenuOpen = false; NavSelectIndex = null;">
      <div class="max-w-7xl mx-auto pl-40 flex gap-x-16">
        <ul @mouseover="NavSelectIndex = index" v-for="(e, index) in SubList" :key="e" class="text-center">
          <li v-for="(el, i) in e" :key="el"
            class="font-bold transition-all text-gray-300 opacity-80 hover:text-white hover:opacity-100 my-4">
            <router-link :to="SubMenuLink[index][i]">{{ el }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- #2 sm-md -->
  <div class="md:hidden relative">

    <div class="w-full z-20 bg-white fixed">
      <div class="max-w-7xl mx-auto justify-center items-center flex">
        <div>
          <router-link to="/" @click="$store.state.navSelectIndex = 999"><img src="../assets/img/logo.png" alt="logo"
              class="w-20 mx-auto ml-10"></router-link>
        </div>
      </div>
    </div>

    <!-- 햄버거 -->
    <div class="-top-3 z-50 pt-5 right-0 fixed" @click="isOpen == true ? isOpen = false : isOpen = true"
      :class="isOpen && 'on'">
      <div v-for="e in 3" :key="e" class="h-0.5 w-7 bg-black rounded transition-all duration-500 m-1.5 top-5"
        :class="isOpen && ' on'"></div>
    </div>
  </div>


  <!-- 우측 hidden 메뉴 Click 사용!! 삼항X -->
  <div :class="isOpen && '!right-0'" class="w-80 bg-mayo h-full z-30 top-0 transiton-all duration-500 -right-80 fixed">
    <img src="@/assets/img/logo.png" alt="" class="w-[120px] mx-auto mt-10">
    <p class="mr-7 text-point text-center font-extrabold mt-5">{{ $store.state.displayName }}<span
        v-if="$store.state.displayName !== ''" class="pl-2 text-black">님</span></p>
    <!--  -->
    <ul class="w-[190px] flex justify-center gap-x-[2%] border-b border-gray-400 pb-3 mx-auto mt-5">
      <li class="font-extrabold mx-auto" v-if="!$store.state.loginChk"><router-link to="/login"><img
            :src="require('@/assets/img/lock-solid.svg')" alt="lock " class="w-3 absolute mt-1 -ml-4">
          로그인</router-link> </li>
      <li class="font-extrabold" v-else @click="logout"><router-link to="/">로그아웃</router-link></li>
      <li class="font-extrabold ml-10" v-if="!$store.state.loginChk"><router-link to="/member"><img
            :src="require('@/assets/img/user-solid.svg')" alt="user" class="w-4 absolute -ml-5"> 회원가입</router-link></li>
    </ul>

    <ul class=" mt-20">
      <li v-for="(e, index) in NavList[0]" :key="e" v-on:click="NavSelectIndex = index; SubDown(index)"
        class="text-center hover:font-extrabold mb-12" :class="isSubOpen = false ? isSubOpen = true : false"><router-link
          :to="NavList[1][index]"
          class="hover:text-green-500 relative after:absolute after:h-[1px] after:bg-gray-800 after:w-[80px] after:left-1/2 after:-translate-x-1/2 after:bottom-0 text-center">{{
            e }}</router-link>
        <ul :style="NavSelectIndex == index && isSubDown"
          class="submenu text-center h-0 overflow-hidden transition-all duration-500">
          <li v-for="(el, i) in SubList[index]" :key="el"><router-link :to="SubMenuLink[index][i]"
              class="hover:text-red-500"> {{ el }}</router-link></li>
        </ul>
      </li>
    </ul>

    <div class="leading-8 absolute bottom-10 flex justify-center flex-wrap">
      <p>CompanyName | 대표자 : 홍길동</p>
      <p>TEL : 053 - 572 - 1005</p>
      <div class="text-gray-400">
        <span class="mr-3">이용약관</span>
        <span>개인정보처리방침</span>
      </div>
    </div>
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
      isOpen: false,
      SubList: Nav.SubMenu,
      SubMenuOpen: false,
      NavSelectIndex: null,
      SubMenuLink: Nav.SubLink,
      isSubDown: '',
      isSubOpen: false,
    }

  },

  methods: {
    logout() {
      auth.signOut();
      this.$store.commit('logOutToken')
    },
    SubDown(e) {
      const list = document.querySelectorAll('.submenu')[e]
      const length = list.querySelectorAll('li').length
      this.isSubDown = `height:${length * 32}px`

      if (list.style.height === '0px') {
        list.style.height = `${length * 32}px`;
      } else {
        list.style.height = '0px';
      }

    },
    ColorChange() {
      const text = document.querySelectorAll('.change')
      text.onclick = function () {
        text.style.color = 'green'
      }
    },
    admin() {
      if (this.uid === this.adminUid) {
        this.adminChk = true
      } else {
        this.adminChk = false
      }
    }
  }
}
</script>

<style>
.on div:nth-child(1) {
  transform: rotate(45deg) translateY(12px)
}

.on div:nth-child(2) {
  opacity: 0;
}

.on div:nth-child(3) {
  transform: rotate(-45deg) translateY(-12px)
}

li {
  list-style: none;
}

.green {
  color: green;
}</style>