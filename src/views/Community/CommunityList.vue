<template>
    <div class="w-full flex flex-wrap gap-x-4 gap-y-2 mb-10">
        <template v-for="(e,index) in dataList" :key="index">
        <ul v-if="calculateNumber(totalLength, perPage, page, index) >0" class="flex flex-wrap w-full lg:w-[48%] xl:w-[24%] border">
            <router-link :to="{ name:'communityDetail', query:{docId: dataId[index]} }" @click="$store.commit('CommunityDetail', dataId[index])" class="basis-full">
            <li class="w-full text-center"><img :src="e.file" :alt="e.title" class="w-full h-[200px] object-cover"/></li>
            <li class="w-full border-t font-bold text-xl p-2">{{ e.title }}</li>
            </router-link>
            <li class="basis-full text-sm p-2 flex flex-wrap">
                <span class="mr-2">게시물번호 {{ calculateNumber(totalLength, perPage, page, index) }} </span>
                <span class="mr-2">작성자 {{e.author}}</span>
                <span class="basis-full">작성일자 {{BoardDate(index)}}</span>
            </li>
            </ul>
        </template>
    </div>
    <div>
        <div class="flex justify-end">
            <router-link to="/recipe/write" class="px-4 py-2 rounded text-white bg-vege-200 hover:bg-vege-400">글쓰기</router-link>
        </div>
        <div class="flex justify-center basis-full gap-x-2 items-center">
            <button @click="prevPage" :disabled="currentPage <= 1" class="font-bold">이전</button>
            <button v-for="e in pageCount.pagenation" :key="e" @click="goToPage(e)" :class="e === page ? 'font-bold text-point': 'text-slate-600'">{{ e }}</button>
            <button @click="nextPage" :disabled="currentPage >= pageCount.totalPage / block" class="font-bold">다음</button>
        </div>
    </div>
</template>
<script>
import {db} from '../../firebase';
export default {
  name:"communityList",
  data() {
      return {
          dataList:[],
          dataId:[],
          posts:[],
          page:1,
          perPage: 12,
          lastVisible: null,
          totalLength:0,
          block:5,
          currentPage:1
      }
  },
  methods: {
      BoardDate(index){
          const date = this.dataList[index].date.seconds*1000 + this.dataList[index].date.nanoseconds/1000000;
          const new_date = new Date(date);
          const formattedDate = (''+new_date.getFullYear()).slice(-2)+'-'+ ('0'+( new_date.getMonth()+1)).slice(-2)+'-'+('0'+ new_date.getDate()).slice(-2)+'';
          return formattedDate
      },
      fetchTotalLength(){
          db.collection("community").get().then((data)=>{
              this.totalLength = data.size
          })
      },
      fetchPost(){
          let query = db.collection("community").orderBy("date","desc").limit(this.perPage)
          if(this.page>1 && this.lastVisible){
              query = query.startAfter(this.lastVisible);
          }
          query.get().then((data)=>{
              const items = [];
              const ids = [];
              data.forEach((e)=>{
                  ids.push(e.id);
                  items.push(e.data());
              })
              this.dataId = ids;
              this.dataList = items;
              this.lastVisible = data.docs[data.docs.length - 1];
          })
      },
      calculateNumber(totalLength, perPage, page, index){
          const totalPages = perPage*(page-1);
          const postIndex = totalLength - (totalPages+index);
          if (postIndex <= 0){return}
          return postIndex
      },
      prevPage(){
          this.currentPage = this.currentPage -1;
          this.page = this.pageCount.pagenation[0];
          this.fetchPost()
      },
      nextPage(){
          this.currentPage = this.currentPage +1;
          this.page = this.pageCount.pagenation[0];
          this.fetchPost()
      },
      goToPage(e){
          this.page= e;
          this.fetchPost()
      }
  },
  computed:{
      pageCount(){
          const totalPage = Math.ceil(this.totalLength/this.perPage);
          const start = (this.currentPage -1)*this.block;
          const end = start + this.block;
          const pagenation = [];
          for(let i = start +1 ; i <=end && i <=totalPage; i++){
              pagenation.push(i);
          }
          if(pagenation.length === 0 && totalPage >0){
              pagenation.push(totalPage);
          }
          return {totalPage, start, end, pagenation}
      }
  },
  created() {
      this.fetchTotalLength();
      this.fetchPost();
  },
}
</script>
<style>
  
</style>