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
      <div class="visual_area flex justify-center pt-[90px]" data-aos="fade-up" data-aos-duration="1000" data-aos-anchir-placement="center-bottom">
        <h2 class="text-right text-[45px] pt-[108px]">
          <span class="text-[#a7c857] font-bold text-[50px]">농달</span>은<br>여러분과 함께<br>지속 가능한 환경을<br>만들겠습니다
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
    <div class="mt-[80px] flex justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
      <div>
        <h3 class="text-[30px] font-medium mb-8 pl-10">금주의 베스트 레시피</h3>
        <!-- contents -->
        <ul class="flex justify-center relative  flex-wrap h-full">
          <li v-for="e in WeekRecipeData" :key="e" class="mx-6 md:basis-[48%] relative  lg:basis-[20%] basis-[98%] sm:basis-[98%] sm:mx-auto ">
            <!-- <router-link :to="{ name:'articleDetail', query:{docId: dataId[index]} }" @click="$store.commit('ArticleDetail', dataId[index])" class="flex flex-wrap "></router-link> -->
            <!-- <img src="https://via.placeholder.com/250" alt="img" class="mx-auto w-full"> -->
            <img :src="e.file" :alt="e.title" class="mx-auto w-[420px] h-60">
            <span class="absolute top-0 left-0 bg-[#bb4849]/90 w-[100px] h-10 text-[#f2e7cf] text-sm text-center leading-10 rounded-br-lg ">베스트 레시피</span>
            <div class="pt-5 mx-auto lg:w-full w-full relative bottom-0 border md:w-full">
              <h5 class="mb-5 text-lg font-semibold text-center">{{ e.title }}</h5>
              <p class="text-right text-gray-400 pr-3 pb-3 right-0 md:w-full">by.{{ e.author }}</p>
            </div>
          </li>
          <p class="cursor-pointer absolute -top-10 right-7"><router-link to="/recipe"> + 더보기</router-link></p>
        </ul>
      </div>
    </div>
    <!--
      새로운 소식
    -->
    <div class="mt-[100px] flex justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900" >
      <div class="relative">
        <h3 class="text-[30px] font-medium mb-8 pl-10">새로운 소식</h3>
        <!-- contents -->
        <ul class="">
          <li v-for="e in 3" :key="e" class="mx-6 relative flex odd:flex-row even:flex-row-reverse mb-20 ">
            <img src="https://via.placeholder.com/500x300" alt="img" class="basis-full lg:basis-[48%]">
            <div class="border pl-5 pt-5 w-[500px] hidden lg:block">
              <h5 class="mb-5 text-lg font-semibold">새로운 소식 타이틀</h5>
            </div>
          </li>
        </ul>
        <p class="cursor-pointer absolute top-10 right-7">+ 더보기</p>
      </div>
    </div>
  </div>
  
</template>

<script>
  import {db} from '../firebase';

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
        WeekRecipeData: null
        
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
        console.log(this.WeekRecipeData)
      })
    },
    setup(){
      onMounted(()=>{
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
svg{
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
.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction{
  bottom: 15px;
}

.swiper-pagination-bullet{ 
  background-color: lightgray;
  width: 40px;
  height: 4px;
  border: none;
  border-radius: 0;
}

.swiper-pagination-bullet-active{
  background: #fff;
}
</style>