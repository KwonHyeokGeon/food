<template>
  <div class="w-full border-red-500 border relative bg-yellow-200">
    
      <div class="max-w-7xl flex justify-center gap-x-[5%] mx-auto border-blue-500 border">
          <div class="border">
            <!-- <img src="http://via.placeholder.com/120x50" alt="logo"> -->
            <img src="../assets/img/logo.jpg" alt="logo" class="w-48 text-center">
            <p class=" text-center text-gray-400">이용약관</p>
            <p class=" text-center text-gray-400">개인정보처리방침</p>
            <p class=" text-center text-gray-400">이메일무단수집</p>
          </div>
          <div class="mt-10">
              <div class="flex justify-center">
                <span class="relative after:absolute after:w-0.5 after:bg-black after:h-4 mr-3 after:-right-2 after:bottom-0.5">CompanyName</span>
                <span>대표자 : 홍길동</span>
              </div>
              <p class="text-center">주소 :  대구광역시 중구 중앙대로 394 제일빌딩 5F</p>
              <div class="flex justify-between">
                  <p>Tel : 053-572-1005</p>
                  <p>FAX : 053-572-1005</p>
                  <p>E-mail : abcd@gmail.com</p>
              </div>
              <p class="text-center"> 2023.(저작권자) all rights reserved</p>
          </div>
      </div>
  </div>

  <button class="z-50 rounded fixed right-5 bottom-5">

  </button>


  <div class="z-50 fixed right-5 bottom-5">
        <button><img src="http://via.placeholder.com/50x50" alt="img" class="rounded-full"></button><br>
        <button><img src="http://via.placeholder.com/50x50" alt="img" class="rounded-full"></button><br>
        <!-- <button><img src="../assets/img/totop.png" alt="img" class="rounded-full w-[50px]"></button><br> -->
        <button @click="scrollTop"><img src="../assets/img/totop.png" alt="img" class="w-[50px] rounded-full" ></button>
    </div>
</template>

<script>
export default {
  name:"FooterPage",
  data() {
    return {
      TopBtnChk:false
    }
  },
  methods: {
    scrollTop(){
      window.scrollTo({top:0,behavior:'smooth'})
    }
  }
  

}
</script>

<style>
</style>