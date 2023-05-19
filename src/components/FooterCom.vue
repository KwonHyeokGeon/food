<template>
  <div class="w-full border-red-500 border relative bg-yellow-200">
    
      <div class="max-w-7xl flex justify-center gap-x-[5%] mx-auto border-blue-500 border flex-wrap">
          <div class="border basis-full ">
            <!-- <img src="http://via.placeholder.com/120x50" alt="logo"> -->
            <img src="../assets/img/logo.png" alt="logo" class="w-48 text-center mx-auto">
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
              <div class="flex justify-center flex-wrap mx-auto">
                  <p>Tel : 053-572-1005</p>
                  <p>FAX : 053-572-1005</p>
                  <p>E-mail : abcd@gmail.com</p>
              </div>
              <p class="text-center"> 2023.(저작권자) all rights reserved</p>
          </div>

      </div>
    </div>
    <!-- side-widget area-->
    <div class="" :class="TopBtnChk ? 'visible opacity-100' : 'invisible opacity-0'" >
      <!-- <img src="https://via.placeholder.com/74x74" alt="" class="absolute bottom-28 right-5 border rounded-full"> -->
      <img :src="require(`@/assets/img/instagram_icon.png`)" alt="인스타그램" class="absolute bottom-28 right-5 rounded-full w-[74px]">
      <button @click="scrollTop" class="uppercase text-black text-lg font-bold absolute bottom-5 right-5 border rounded-full p-5 py-[22px] bg-white">top</button>
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
</style>