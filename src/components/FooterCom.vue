<template>
  <div class="w-full border relative bg-yellow-200">
    
      <div class="max-w-7xl lg:flex lg:justify-center lg:gap-x-[5%] mx-auto">
          <div class="border">
            <img src="../assets/img/logo.png" alt="logo" class="w-48 text-center mx-auto">
            <p class=" text-center text-gray-400">이용약관</p>
            <p class=" text-center text-gray-400">개인정보처리방침</p>
            <p class=" text-center text-gray-400">이메일무단수집</p>
          </div>
          <div>
              <div class="flex justify-center lg:mt-20">
                <span class="relative after:absolute after:w-0.5 after:bg-black after:h-4 mr-3 after:-right-2 after:bottom-1">CompanyName</span>
                <span>대표자 : 홍길동</span>
              </div>
              <p class="text-center">주소 :  대구광역시 중구 중앙대로 394 제일빌딩 5F</p>
              <div class="mx-auto flex justify-center flex-wrap">
                  <p class="mr-2">Tel : 053-572-1005</p>
                  <p class="mr-2">FAX : 053-572-1005</p>
                  <p class="mr-2">E-mail : abcd@gmail.com</p>
              </div>
              <p class="text-center"> 2023.(저작권자) all rights reserved</p>
          </div>
      </div>
  </div>
  <div class="h-[370px] bg-vege-600 flex justify-center text-white relative">
    <!-- left area -->
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
    <!-- side-widget area-->
    <div class="" :class="TopBtnChk ? 'visible opacity-100' : 'invisible opacity-0'" >
      <!-- <img src="https://via.placeholder.com/74x74" alt="" class="absolute bottom-28 right-5 border rounded-full"> -->
      <a href="https://www.instagram.com/nongdal_fresh/?igshid=MmJiY2I4NDBkZg%3D%3D"><img :src="require(`@/assets/img/instagram_icon.png`)" alt="인스타그램" class="absolute bottom-28 right-5 rounded-full w-[74px]"></a>
      <button @click="scrollTop" class="uppercase text-black text-lg font-bold absolute bottom-5 right-5 border rounded-full p-5 py-[22px] bg-white">top</button>
    </div>
  </div>
</template>

<script>
export default {
  name:"FooterPage",
  data() {
      return {
        windowScroll: window.scrollY,
        TopBtnChk: false
      }
    },
    mounted() {
      window.addEventListener("scroll", this.updateScroll)
    },
    methods: {
      scrollTop(){
        window.scrollTo({top: 0, behavior: 'smooth'}) // window. - javascript 문법 
        // document.body.scrollHeight - 문서 전체 세로 길이 값 가져오는 법 (아래로 )
      },
      updateScroll(){
        this.windowScroll = window.scrollY;
        // console.log(this.windowScroll)
        if(this.windowScroll > 500){
          this.TopBtnChk = true
        }else{
          this.TopBtnChk = false
        }
      }
    },
}
</script>

<style>
.verticalCenter {
  align-items:center
  

}
</style>