<template>
  <div>
    <!--
      swiper area
    -->
    <div class="swiper-container">
          <div class="swiper-wrap">
              <swiper class="mySwiper" :modules="Modules" :autoplay="{delat:4000}" :slides-per-view="1" :space-between="10" :loop="true" :pagination="{pagination: 'true', clickable: true,}" :effect="'fade'">
                  <swiper-slide class="Swiper-slide" v-for="(e, index) in 3" :key="index">
                      <img :src="require(`@/assets/img/swiper_img_${index+1}.png`)" :alt="e">
                  </swiper-slide>
              </swiper>
          </div>
      </div>
      <!--
        visual area
      -->
<<<<<<< HEAD
      <div class="visual_area flex justify-center pt-40">
        <h2 class="text-right text-[64px] pt-[100px]">
          <span class="text-[#a7c857] font-semibold text-[85px]">농달</span>은<br>여러분과 함께<br>지속 가능한 환경을<br>만들겠습니다
        </h2>
        <svg class="" xmlns="http://www.w3.org/2000/svg" xml:lang="en" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
=======
      <div class="visual_area flex flex-col-reverse md:flex-row md:justify-center my-[40px] md:pt-[90px]" data-aos="fade-up" data-aos-duration="1000" data-aos-anchir-placement="center-bottom">
        <h2 class="text-center md:text-right text-[30px] lg:text-[45px] xl:text-[60px] md:text-[30px] lg:pt-[108px] md:pt-[40px]">
          <span class="text-[#a7c857] font-bold text-[40px] md:text-[50px] xl:text-[70px]">농달</span>은<br>여러분과 함께<br>지속 가능한 환경을<br>만들겠습니다
        </h2>
        <svg class="md:w-[280px] xl:w-[520px] mx-auto md:mx-0" xmlns="http://www.w3.org/2000/svg" xml:lang="en" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
>>>>>>> mnjeon
          <defs>
            <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"  />
          </defs>
          <g class="textcircle">
            <text class="text-[36px]">
              <textPath xlink:href="#textcircle">
                GREENARY GREENARY GREENARY GREENARY &nbsp;
              </textPath>
            </text>
          </g>
        </svg>
     </div>
    <!--
      금주의 베스트 레시피
    -->
<<<<<<< HEAD
    <div class="mt-[100px] flex justify-center">
      <div>
        <h3 class="text-[40px] font-medium mb-8 pl-10">금주의 베스트 레시피</h3>
        <!-- contents -->
        <ul class="flex justify-center">
          <li v-for="e in 4" :key="e" class="mx-6 relative">
            <img src="https://via.placeholder.com/250" alt="img">
            <div class="border pl-5 pt-5">
              <span class="absolute top-0 left-0 bg-[#bb4849]/90 w-[100px] h-10 text-[#f2e7cf] text-center leading-10 rounded-br-lg">베스트 레시피</span>
              <h5 class="mb-5 text-lg font-semibold">베스트 레시피 타이틀</h5>
              <p class="text-right text-gray-400 pr-3 pb-3">by.작성자</p>
            </div>
          </li>
=======
    <div class="border-t mt-[80px] flex justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
      <div>
        <h3 class="text-[25px] my-[50px] flex justify-center md:flex-none md:text-[30px] font-medium lg:mb-8 :lgpl-10 md:flex md:justify-center md:mb-16">금주의 베스트 레시피</h3>
        <!-- contents -->
        <ul class="flex justify-center relative flex-wrap lg:flex">
          <li v-for="e in 4" :key="e" class="mx-6 w-[300px] relative mb-20 md:mb-10">
            <img src="https://via.placeholder.com/250" alt="img" class="w-[300px]">
            <div class="border pt-5">
              <span class="absolute top-0 left-0 bg-[#bb4849]/90 w-[120px] h-10 text-[#f2e7cf] text-center leading-10 rounded-br-lg px-2">베스트 레시피</span>
              <h5 class="mb-5 text-lg font-semibold text-center">베스트 레시피 타이틀</h5>
              <p class="text-right text-gray-400 pr-3 pb-3">by.작성자</p>
            </div>
          </li>
          <p class="cursor-pointer absolute -top-7 right-12 text-gray-700 text-sm md:right-24">+ 더보기</p>
>>>>>>> mnjeon
        </ul>
      </div>
    </div>
    <!--
      새로운 소식
    -->
<<<<<<< HEAD
    <div class="mt-[100px] flex justify-center">
      <div>
        <h3 class="text-[40px] font-medium mb-8 pl-10">새로운 소식</h3>
        <!-- contents -->
        <ul class="flex justify-center">
          <li v-for="e in 4" :key="e" class="mx-6 relative">
            <img src="https://via.placeholder.com/250" alt="img">
            <div class="border pl-5 pt-5">
              <span class="absolute top-0 left-0 bg-[#bb4849]/90 w-[100px] h-10 text-[#f2e7cf] text-center leading-10 rounded-br-lg">베스트 레시피</span>
              <h5 class="mb-5 text-lg font-semibold">베스트 레시피 타이틀</h5>
              <p class="text-right text-gray-400 pr-3 pb-3">by.작성자</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

<div class="py-24 pt-48 text-center basis-full">
    </div>
    <div class="pb-24 basis-[75%] flex flex-wrap gap-x-3.5 mx-auto">
      <div v-for="e in 3" :key="e" class="basis-full border rounded-md mb-20 relative flex flex-wrap items-center group">
        <div class="basis-full md:basis-2/4 group-odd:order-1 md:group-odd:order-1 md:group-even:order-2 peer">
          <img src="https://via.placeholder.com/140" alt="img" class="p-2.5 h-[350px] transition duration-300 ease-in-out hover:scale-110">
        </div>
        <div class="basis-full md:basis-2/4 md:group-even:left-14 md:group-odd:-left-14 group-odd:order-2 group-even:text-right group-even:order-1 relative z-10 pl-5 pr-5 sm:px-16 py-5 box-border bg-gray-50  ease-in duration-300">
          <h3 class="py-5 font-bold">asnfbmnasbfmnasbf</h3>
          <p class="pb-5">dfmnsdkfnsd,mf</p>
        </div>
      </div>
      
    </div>
=======
    <div class="border-t md:mt-[100px] flex justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900" >
      <div class="relative">
        <h3 class="flex justify-center my-[50px] text-[30px] font-medium md:mb-8 md:pl-10">새로운 소식</h3>
        <!-- contents -->
        <ul class="">
          <li v-for="e in 3" :key="e" class="mx-6 relative odd:flex-row even:flex-row-reverse mb-20 w-[300px] md:w-[700px]">
            <img src="https://via.placeholder.com/500x300" alt="img" class="md:w-[700px]">
            <div class="border pl-5 pt-5 w-[300px] md:w-[700px] md:h-[200px]">
              <h5 class="mb-5 text-lg font-semibold md:text-3xl">새로운 소식 타이틀</h5>
            </div>
          </li>
        </ul>
        <p class="cursor-pointer absolute top-[100px] right-8 text-gray-700 text-sm ">+ 더보기</p>
      </div>
    </div>
>>>>>>> mnjeon
  </div>
  
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { EffectFade, Pagination, Autoplay, Navigation } from 'swiper';
  import 'swiper/css'
  import 'swiper/css/bundle';
  import 'swiper/css/pagination';
  import "swiper/css/effect-fade";
  import 'swiper/css/navigation';
<<<<<<< HEAD
=======
  
import { onMounted } from 'vue';
import AOS from "aos";
>>>>>>> mnjeon

  export default {
    data() {
      return {
        Modules: [EffectFade, Pagination, Autoplay, Navigation],
      }
    },
    components: {
        Swiper,
        SwiperSlide
    },
<<<<<<< HEAD
=======
    setup(){
      onMounted(()=>{
        AOS.init();
      })
    }
>>>>>>> mnjeon
  }
</script>

<style>
/* text animation */
text {
  fill: #386641;
  font-size: 36px;
  text-transform: uppercase;
  /* font-variant-ligatures: none; */
<<<<<<< HEAD
  letter-spacing: 5px;
=======
  letter-spacing: 4px;
>>>>>>> mnjeon
  animation: rotate 25s linear infinite;
  transform-origin: 250px 250px;
}
svg{
<<<<<<< HEAD
  max-width: 80vmin;
=======
  max-width: 50vmin;
>>>>>>> mnjeon
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
.textcircle {
  transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
  transform-origin: 250px 250px;
}
svg:hover .textcircle {
  transform: scale(1.2) rotate(90deg);
}

/* paginationn set-up */
.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction{
  bottom: 15px;
}

<<<<<<< HEAD
.swiper-pagination-bullet{
=======
.swiper-pagination-bullet{ 
>>>>>>> mnjeon
  background-color: lightgray;
  width: 20px;
  height: 2px;
  border: none;
  border-radius: 0;
}

.swiper-pagination-bullet-active{
  background: #fff;
}
<<<<<<< HEAD
</style>
=======

</style>
>>>>>>> mnjeon
