<template>
  <div class="w-full border relative bg-green-900">
    
      <div class="max-w-7xl lg:flex lg:justify-center lg:gap-x-[5%] mx-auto">
          <div class="border">
            <img src="../assets/img/logo_white.png" alt="logo" class="w-48 text-center mx-auto">
            <p class=" text-center text-white">© 2023. 농달 all rights reserved.</p>
          </div>
          <div class="text-white">
              <div class="flex lg:mt-10 mb-3">
                <span class="relative after:absolute after:w-0.5 after:bg-black after:h-4 mr-3 after:-right-2 lg:after:bottom-1">농달</span>
                <span>대표자 : 홍길동</span>
              </div>
              <div class="mx-auto">
                <p class="mb-3"> 사업자번호 000-0000-000000</p>
                <p class="mb-3">주소 :  대구광역시 중구 중앙대로 394 제일빌딩 5F</p>
                <div class="flex">
                  <p class="mr-2">Tel : 053-572-1005</p>
                  <p class="mr-2">FAX : 053-572-1005</p>
                  <p class="mr-2">E-mail : abcd@gmail.com</p>
                </div>
              </div>
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
.verticalCenter {
  align-items:center
  

}
</style>