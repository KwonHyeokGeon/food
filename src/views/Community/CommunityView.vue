<template>
    <div class="bg-vege-600 w-full">
      <div class="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <h2 class="font-bold text-3xl sm:text-4xl relative pt-20 pb-4 text-white">Community
          <span class="w-20 h-[2px] bg-white absolute bottom-0 left-1/2 -translate-x-1/2 inline-block"></span>
        </h2>
        <p class="py-2 text-white">커뮤니티</p>
        <p class="px-20 pt-5 pb-20 text-mayo">설명이 뭐시기저시기
        </p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 justify-between py-24 gap-x-10 gap-y-16 px-[2%] lg:px-0">
      <div class="basis-[42%] flex flex-wrap relative">
        <router-link to="/recipe" class="absolute text-sm font-bold text-point -top-6 right-3 md:right-0">+ 더보기</router-link>
        <h3 class="basis-full bg-vege-200 text-center text-xl font-bold py-5">금주의 베스트 레시피</h3>
        <div class="basis-full border p-3">
          <ul class="flex flex-wrap gap-y-2">
            <li v-for="(e,index) in WeekRecipeData" :key="index" class="w-full flex flex-wrap">
              <router-link :to="{ name:'communityDetail', query:{docId: WeekRecipeId[index]} }" @click="$store.commit('CommunityDetail', WeekRecipeId[index])" class="basis-full flex flex-wrap group">
                <div class="w-full sm:w-1/2 h-[150px] relative">
                  <span class="absolute bottom-3 right-3 bg-point px-2 py-0.5 rounded-xl text-xs text-white flex gap-x-1 z-10">
                    <img :src="require(`@/assets/img/heart.png`)" alt="좋아요" class="mt-0.5 w-3 h-3"> {{ e.liked }}</span>
                  <img :src="e.file" :alt="e.title" class="w-full h-full object-cover group-hover:opacity-60">
                </div>
                <div class="w-full sm:w-1/2 pl-0 sm:pl-3 sm:px-1 flex flex-wrap">
                  <p class="basis-full font-bold text-xl mt-2 group-hover:text-point">{{ e.title }}</p>
                  <div class="text-sm flex flex-wrap">
                    <p class="ml-2 basis-full relative after:absolute after:inline-block after:bg-vege-200/50 after:w-1 after:h-1 after:rounded-full after:-left-2 after:top-2"><span class="font-bold">인원:</span> {{ e.QNT }}</p>
                    <p class="ml-2 basis-full relative after:absolute after:inline-block after:bg-vege-200/50 after:w-1 after:h-1 after:rounded-full after:-left-2 after:top-2"><span class="font-bold">소요시간:</span> {{ e.COOKING_TIME }}</p>
                    <p class="ml-2 basis-full relative after:absolute after:inline-block after:bg-vege-200/50 after:w-1 after:h-1 after:rounded-full after:-left-2 after:top-2"><span class="font-bold">난이도:</span> {{ e.LEVEL_NM }}</p>
                  </div>
                  <span class="basis-full text-right pr-5 text-sm text-gray-500">{{ e.author }}</span>
                </div>
              </router-link>
              </li>
          </ul>
        </div>
      </div>
      <div class="basis-[42%] flex flex-wrap relative">
        <router-link to="/recipe" class="absolute text-sm font-bold text-point -top-6 right-3 md:right-0">+ 더보기</router-link>
        <h3 class="basis-full bg-vege-200 text-center text-xl font-bold py-5">신작 유저 레시피</h3>
        <div class="basis-full border p-3">
          <ul class="flex flex-wrap gap-y-2">
            <li v-for="(e,index) in NewRecipeData" :key="index" class="w-full flex flex-wrap">
              <router-link :to="{ name:'communityDetail', query:{docId: NewRecipeId[index]} }" @click="$store.commit('CommunityDetail', NewRecipeId[index])" class="basis-full flex flex-wrap group">
                <div class="w-full sm:w-1/2 h-[150px] relative">
                  <span class="absolute bottom-3 right-3 bg-point px-2 py-0.5 rounded-xl text-xs text-white flex gap-x-1 z-10">
                    <img :src="require(`@/assets/img/heart.png`)" alt="좋아요" class="mt-0.5 w-3 h-3"> {{ e.liked }}</span>
                  <img :src="e.file" :alt="e.title" class="w-full h-full object-cover group-hover:opacity-60">
                </div>
                <div class="w-full sm:w-1/2 pl-0 sm:pl-3 sm:px-1 flex flex-wrap">
                  <p class="basis-full font-bold text-xl mt-2 group-hover:text-point">{{ e.title }}</p>
                  <div class="text-sm flex flex-wrap">
                    <p class="ml-2 basis-full relative after:absolute after:inline-block after:bg-vege-200/50 after:w-1 after:h-1 after:rounded-full after:-left-2 after:top-2"><span class="font-bold">인원:</span> {{ e.QNT }}</p>
                    <p class="ml-2 basis-full relative after:absolute after:inline-block after:bg-vege-200/50 after:w-1 after:h-1 after:rounded-full after:-left-2 after:top-2"><span class="font-bold">소요시간:</span> {{ e.COOKING_TIME }}</p>
                    <p class="ml-2 basis-full relative after:absolute after:inline-block after:bg-vege-200/50 after:w-1 after:h-1 after:rounded-full after:-left-2 after:top-2"><span class="font-bold">난이도:</span> {{ e.LEVEL_NM }}</p>
                  </div>
                  <span class="basis-full text-right pr-5 text-sm text-gray-500">{{ e.author }}</span>
                </div>
              </router-link>
              </li>
          </ul>
        </div>
      </div>
      <div class="basis-[42%] flex flex-col relative">
        <router-link to="/qna" class="absolute text-sm font-bold text-point -top-6 right-3 md:right-0">+ 더보기</router-link>
        <h3 class="basis-1/12 bg-vege-200 text-center text-xl font-bold py-5">Q&A</h3>
      <div class="basis-11/12 mt-2 px-1 py-3">
        <ul class="flex flex-col gap-y-3 px-2">
          <li v-for="e in qnaList" :key="e" class="border-b-black border-b py-1">
            <p class="text-[#787676] text-sm">{{ e.author }}</p>
            <p class="flex justify-between">{{ e.title }}<span class="flex text-sm gap-x-1 items-center"><img :src="require(`@/assets/img/reply.png`)" alt="댓글" class="w-6"/>{{ e.reply.length }}</span></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="basis-[42%] flex flex-col relative">
        <router-link to="/notice" class="absolute text-sm font-bold text-point -top-6 right-3 md:right-0">+ 더보기</router-link>
        <h3 class="basis-1/12 bg-vege-200 text-center text-xl font-bold py-5">공지사항</h3>
      <div class="basis-11/12 mt-2 px-1 py-3">
        <ul class="flex flex-col gap-y-3 px-2">
          <li v-for="(e, index) in noticeList" :key="e" class="border-b-black border-b py-1">
            <p class="text-[#787676] text-sm">{{ e.author }}</p>
            <p class="flex justify-between">{{ e.title }}<span class="text-xs">{{ new Date(noticeDate[index])}}</span></p>
          </li>
        </ul>
      </div>
    </div>

    </div>
</template>

<script>
import {db} from '../../firebase';
export default {
  data() {
    return {
      WeekRecipeData:[],
      WeekRecipeId:[],
      NewRecipeData:[],
      NewRecipeId:[],
      qnaList: [],
      noticeList: [],
      noticeDate: []
    }
  },
  components: {
  },
  mounted() {
    db.collection('qna').limit(6).get().then((data) => {
      data.forEach((e) => {
        this.qnaList.push(e.data())
      });
    }),
    db.collection('notice').limit(6).get().then((data) => {
      data.forEach((e) => {
        this.noticeList.push(e.data())
        this.noticeDate.push(e.data().date.seconds * 1000 + e.data().date.nanoseconds / 1000000);
      })
    }),
    db.collection("community").orderBy("liked","desc").limit(3).get().then((data)=>{
      const items = [];
      const ids = [];
      data.forEach((e)=>{
          ids.push(e.id);
          items.push(e.data());
        })
      this.WeekRecipeId = ids;
      this.WeekRecipeData = items;
    }),
    db.collection("community").orderBy("date","desc").limit(3).get().then((data)=>{
      const items = [];
      const ids = [];
      data.forEach((e)=>{
          ids.push(e.id);
          items.push(e.data());
        })
      this.NewRecipeId = ids;
      this.NewRecipeData = items;
    })
  },
}
</script>

<style></style>