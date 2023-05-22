<template>
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
      <img :src="require(`@/assets/img/instagram_icon.png`)" alt="인스타그램" class="absolute bottom-28 right-5 rounded-full w-[74px]">
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