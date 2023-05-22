<template>
<<<<<<< HEAD
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
=======
  
  <div class="h-[370px] bg-vege-600 text-white relative">



    <!-- # 640 (sm) -->
    <div class="block md:hidden lg:hidden">
      <div class="flex justify-center">
        <div>
          <img :src="require(`@/assets/img/logo_white.png`)" alt="농달" class="w-[150px] mx-auto" />
        </div>
        <div class="mt-7 ml-5">
          <p class="my-4">농달 | 대표자 : 홍길동</p>
          <p class="my-4">사업자번호 000-000-000000</p>
        </div>
      </div>
      <div class="mx-auto max-w-sm flex flex-wrap justify-center">
        <p class="my-4">주소 : 대구광역시 중구 중앙대로 394 제일빌딩 5F</p>
        <div class=" -mx-2 flex flex-wrap justify-center">
              <p class="mx-2">E-mail : abcd@gmail.com</p><br>
              <p class="mx-2">TEL : 053-572-1005</p><br>
              <p class="mx-2">FAX : 053-572-1005</p><br>
            </div>
            <p class="my-4">ⓒ 2023. 농달 all rights reserved.</p>
      </div>
    </div>



    <!-- # 768 (md) -->
    <div class="hidden md:block lg:hidden">
      <div class="flex justify-center">
        <div>
          <img :src="require(`@/assets/img/logo_white.png`)" alt="농달" class="w-[150px] mx-auto" />
        </div>
        <div class="mt-7 ml-5">
          <p class="my-4">농달 | 대표자 : 홍길동</p>
          <p class="my-4">사업자번호 000-000-000000</p>
        </div>
      </div>
      <div class="mx-auto max-w-sm">
        <p class="my-4">주소 : 대구광역시 중구 중앙대로 394 제일빌딩 5F</p>
        <div class="my-5 -mx-2 flex flex-wrap">
              <p class="mx-2">TEL : 053-572-1005</p>
              <p class="mx-2">FAX : 053-572-1005</p>
              <p class="mx-2">E-mail : abcd@gmail.com</p>
            </div>
            <p class="my-4">ⓒ 2023. 농달 all rights reserved.</p>
      </div>
    </div>
    

    <!-- # 1280 (lg) -->
    <div class="hidden md:hidden lg:block">
      <div class="border-b pb-7 flex justify-center w-full h-[20px] mx-auto bg-vege-600 text-white gap-x-7 leading-7">
        <p>이용약관</p>
        <p>개인정보처리방침</p>
        <p>이메일무단수집거부</p>
      </div>  
      <!-- left area -->
      <div class="flex justify-center">
        <div class="mt-14">
          <img :src="require(`@/assets/img/logo_white.png`)" alt="농달" class="w-[200px] mx-auto">
          <p class="my-4">ⓒ 2023. 농달 all rights reserved.</p>
        </div>
    
        <!-- right area -->
        <div class="ml-20 mt-24">
          <p class="my-4">농달 | 대표자 : 홍길동</p>
          <p class="my-4">사업자번호 000-000-000000</p>
          <p class="my-4">주소 : 대구광역시 중구 중앙대로 394 제일빌딩 5F</p>
          <div class="my-5 -mx-2 flex">
            <p class="mx-2">TEL : 053-572-1005</p>
            <p class="mx-2">FAX : 053-572-1005</p>
            <p class="mx-2">E-mail : abcd@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    
    
    <!-- side-widget area-->
    <div class="" :class="TopBtnChk ? 'visible opacity-100' : 'invisible opacity-0'" ><a href="https://instagram.com/nongdal_fresh?igshid=MmJiY2I4NDBkZg==">
      <img :src="require(`@/assets/img/instagram-icon.png`)" alt="인스타그램" class="absolute bottom-28 right-5 rounded-full w-12">
    </a>
      <!-- <img src="https://via.placeholder.com/74x74" alt="" class="absolute bottom-28 right-5 border rounded-full"> -->
      
      <button @click="scrollTop" class="uppercase text-black text-lg font-bold absolute bottom-5 right-5 border rounded-full w-12 h-12 bg-white">top</button>
    </div>
  </div>
>>>>>>> 3a8c59a573752de7a2b1be2d63c50797c479e763
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