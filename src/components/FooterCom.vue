<template>

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
    <div class="" :class="TopBtnChk ? 'visible opacity-100' : 'invisible opacity-0'"><a
        href="https://instagram.com/nongdal_fresh?igshid=MmJiY2I4NDBkZg==" target="_blank">
        <img :src="require(`@/assets/img/instagram-icon.png`)" alt="인스타그램"
          class="absolute bottom-24 right-5 rounded-full w-12">
      </a>
      <!-- <img src="https://via.placeholder.com/74x74" alt="" class="absolute bottom-28 right-5 border rounded-full"> -->

      <button @click="scrollTop"
        class="uppercase text-black text-md font-bold absolute bottom-10 right-5 border rounded-full w-12 h-12 bg-white">top</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterPage",
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
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' }) // window. - javascript 문법 
      // document.body.scrollHeight - 문서 전체 세로 길이 값 가져오는 법 (아래로 )
    },
    updateScroll() {
      this.windowScroll = window.scrollY;
      // console.log(this.windowScroll)
      if (this.windowScroll > 500) {
        this.TopBtnChk = true
      } else {
        this.TopBtnChk = false
      }
    }
  },
}
</script>

<style>
.verticalCenter {
  align-items: center
}
</style>