<template>
    <div class="w-full">
        <ul class="flex justify-between bg-vege-200/20 py-2 border-y border-vege-400">
            <li class="basis-10 text-center">번호</li>
            <li class="basis-7/12">제목</li>
            <li class="basis-16 text-center">작성자</li>
            <li class="basis-24 text-center">날짜</li>
            <li class="basis-24 text-center">문의상태</li>
        </ul>
        <template v-for="(e,index) in dataList" :key="index">
            <ul v-if="calculateNumber(totalLength, perPage, page, index) >0" class="flex justify-between py-1">
                <li class="basis-10 text-center">{{ calculateNumber(totalLength, perPage, page, index) }}</li>
                <li class="basis-7/12">
                    <router-link :to="{ name:'qnaDetail', query:{docId: dataId[index]} }" @click="$store.commit('QnaDetail', dataId[index])">{{ e.title }}</router-link>
                </li>
                <li class="basis-16 text-center">{{e.author}}</li>
                <li class="basis-24 text-center">{{BoardDate(index)}}</li>
                <li class="basis-24 text-center font-bold"><p v-html="e.reply[0] === undefined? '접수완료':'답변완료'" :class="e.reply[0] === undefined? 'text-point':'text-vege-400'"></p></li>
            </ul>
        </template>
        <div v-if="this.$store.state.uid" class="flex justify-end pt-10">
            <router-link v-if="this.$store.state.uid" to="/qna/write" class="px-4 py-2 rounded text-white bg-vege-200 hover:bg-vege-400">문의 작성하기</router-link>
        </div>
        <div class="flex justify-center basis-full gap-x-2 items-center mt-10">
            <button @click="prevPage" :disabled="currentPage <= 1" class="font-bold">이전</button>
            <button v-for="e in pageCount.pagenation" :key="e" @click="goToPage(e)" :class="e === page ? 'font-bold text-point': 'text-slate-600'">{{ e }}</button>
            <button @click="nextPage" :disabled="currentPage >= pageCount.totalPage / block" class="font-bold">다음</button>
        </div>
    </div>
</template>
<script>
import {db} from '../../firebase';
export default {
    name:"QnaList",
    data() {
        return {
            dataList:[],
            dataId:[],
            posts:[],
            page:1,
            perPage: 10,
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
            db.collection("qna").get().then((data)=>{
                this.totalLength = data.size
            })
        },
        fetchPost(){
            let query = db.collection("qna").orderBy("date","desc").limit(this.perPage)
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