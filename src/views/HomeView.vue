<template>
  <div class="pt-20 md:pt-0">
    <!--
      swiper area
    -->
    <div class="swiper-container">
      <div class="swiper-wrap">
        <swiper class="mySwiper" :modules="Modules" :autoplay="{ delat: 4000 }" :slides-per-view="1" :space-between="10"
          :loop="true" :pagination="{ pagination: 'true', clickable: true, }" :effect="'fade'">
          <swiper-slide class="Swiper-slide" v-for="(e, index) in 3" :key="index">
            <img :src="require(`@/assets/img/swiper_img_${index + 1}.png`)" :alt="e">
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!--
        visual area
      -->
    <div class="visual_area flex flex-col-reverse md:flex-row gap-x-14 items-center md:justify-center pt-[90px]"
      data-aos="fade-up" data-aos-duration="1000" data-aos-anchir-placement="center-bottom">
      <h2 class="text-center md:text-right md:text-[45px] text-xl leading-loose">
        <span class="text-[#a7c857] font-bold md:text-[50px] text-3xl tracking-wider">농달</span>은<br>여러분과 함께<br>지속 가능한
        환경을<br>만들겠습니다
      </h2>
      <svg class="" xmlns="http://www.w3.org/2000/svg" xml:lang="en" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 500">
        <defs>
          <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" />
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
    <!-- 데이터로 이동하는 코드 추가해야함 !!!!!!!! -->
    <div class="mt-[80px] flex justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
      <div>
        <h3 class="text-[30px] font-medium mb-8 pl-10">금주의 베스트 레시피</h3>
        <!-- contents -->
        <ul class="flex justify-center relative  flex-wrap h-full">
          <li v-for="(e, index) in WeekRecipeData" :key="e"
          class="mx-6 md:basis-[48%] relative  lg:basis-[20%] basis-[98%] sm:basis-[98%] sm:mx-auto ">
          <router-link :to="`/recipe/detail?docId=${WeekRecipeId[index]}`">
            <img :src="e.file" :alt="e.title" class="mx-auto w-[420px] h-60">
            <span
              class="absolute top-0 left-0 bg-[#bb4849]/90 w-[100px] h-10 text-[#f2e7cf] text-sm text-center leading-10 rounded-br-lg ">베스트
              레시피</span>
            <div class="pt-5 mx-auto lg:w-full w-full relative bottom-0 border md:w-full">
              <h5 class="mb-5 text-lg font-semibold text-center">{{ e.title }}</h5>
              <p class="text-right text-gray-400 pr-3 pb-3 right-0 md:w-full">by.{{ e.author }}</p>
            </div>
          </router-link>
          </li>
          <p class="cursor-pointer absolute -top-10 right-7"><router-link to="/recipe"> + 더보기</router-link></p>
        </ul>
      </div>
    </div>
    <!--
      새로운 소식
    -->
    <div class="mt-[100px] flex justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
      <div class="relative">
        <h3 class="text-[30px] font-medium mb-8 pl-10">새로운 소식</h3>
        <!-- contents -->
        <ul class="">
          <li v-for="(e, index) in dataList" :key="e" >
            <router-link :to="`/event/detail?docId=${dataId[index]}`" class="mx-6 relative flex odd:flex-row even:flex-row-reverse mb-20 ">
              <img :src="e.file" :alt="e.title"  class="basis-full lg:basis-[48%] w-[500px] h-[500px]">
              <div class="border pl-5 pt-5 w-[500px] hidden lg:block">
                <h5 class="mb-5 text-lg font-semibold">{{ e.title }}</h5>
              </div>
            </router-link>
          </li>
        </ul>
        <p class="cursor-pointer absolute top-10 right-7">+ 더보기</p>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';


import { onMounted } from 'vue';
import AOS from "aos";

export default {
  data() {
    return {
      Modules: [EffectFade, Pagination, Autoplay, Navigation],
      WeekRecipeId: null,
      WeekRecipeData: null,
      dataList:[],
      dataId:[],

    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    db.collection("community").orderBy("liked", "desc").limit(4).get().then((data) => {
      const items = [];
      const ids = [];
      data.forEach((e) => {
        ids.push(e.id);
        items.push(e.data());
      })
      this.WeekRecipeId = ids;
      this.WeekRecipeData = items;
    })


    let query = db.collection("event").orderBy("date","desc").limit(3)
      query.get().then((data)=>{
          const items = [];
          const ids = [];
          data.forEach((e)=>{
            console.log(e.id)
              ids.push(e.id);
              items.push(e.data());
              console.log(items)
          })
          this.dataId = ids;
          this.dataList = items;
      })
  },
  setup() {
    onMounted(() => {
      AOS.init();
    })
  }
}
</script>

<style>
/* text animation */
text {
  fill: #386641;
  font-size: 36px;
  text-transform: uppercase;
  /* font-variant-ligatures: none; */
  letter-spacing: 4px;
  animation: rotate 25s linear infinite;
  transform-origin: 250px 250px;
}

svg {
  max-width: 50vmin;
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
.swiper-horizontal>.swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 15px;
}

.swiper-pagination-bullet {
  background-color: lightgray;
  width: 20px;
  height: 4px;
  border: none;
  border-radius: 0;
}

.swiper-pagination-bullet-active {
  background: #fff;
}

@media(min-width: 769px) {
  .swiper-pagination-bullet {
    width: 40px;
  }
}
</style>