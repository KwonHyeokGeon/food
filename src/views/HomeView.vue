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
      <div class="visual_area flex justify-center pt-40">
        <h2 class="text-right text-[64px] pt-[100px]">
          <span class="text-[#a7c857] font-semibold text-[85px]">농달</span>은<br>여러분과 함께<br>지속 가능한 환경을<br>만들겠습니다
        </h2>
        <svg class="" xmlns="http://www.w3.org/2000/svg" xml:lang="en" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
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
        </ul>
      </div>
    </div>
    <!--
      새로운 소식
    -->
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
  }
</script>

<style>
/* text animation */
text {
  fill: #386641;
  font-size: 36px;
  text-transform: uppercase;
  /* font-variant-ligatures: none; */
  letter-spacing: 5px;
  animation: rotate 25s linear infinite;
  transform-origin: 250px 250px;
}
svg{
  max-width: 80vmin;
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

.swiper-pagination-bullet{ 
  background-color: lightgray;
  width: 20px;
  height: 2px;
  border: none;
  border-radius: 0;
}

.swiper-pagination-bullet-active{
  background: #fff;
}
</style>