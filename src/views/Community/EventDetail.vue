<template>
    <div class="border-y border-vege-600 p-5">
        <h2 class="text-2xl font-bold">
            <span v-html="BoardContent.eventOn? '[진행중]':'[종료]'" :class="BoardContent.eventOn? 'text-vege-400':'text-point'"></span> {{BoardContent.title}}
        </h2>
        <div class="basis-full flex text-center text-sm gap-x-3 pb-3 border-b mt-1">
            <p class="relative after:absolute after:inline-block after:bg-vege-200/50 after:w-0.5 after:h-4 after:rounded-full after:-right-2 after:top-0.5"><span class="mr-1">작성자</span>{{BoardContent.author}}</p>
            <p><span class="mr-1">작성일시</span>{{dateTime}}</p>

        </div>
        <img v-if="BoardContent.file" :src="BoardContent.file" alt="첨부파일" class="mx-auto mt-5">
        <div class="py-5 whitespace-pre-line">
            {{ BoardContent.content }}
        </div>
    </div>
    <div class="flex justify-between mt-10 items-center">
        <div>
            <router-link to="/event/list" class="px-4 py-2 rounded text-white bg-vege-200 hover:bg-vege-400">목록으로</router-link>
        </div>
        <div class="flex gap-x-5">
            <router-link to="/event/modify" class="px-4 py-2 rounded text-white bg-vege-200 hover:bg-vege-400">수정</router-link>
            <button @click="Delete()" class="px-4 py-2 rounded text-white bg-point/70 hover:bg-point">삭제</button>
        </div>
    </div>
  </template>
  <script>
  import {db} from '../../firebase';
  export default {
    name:"EventDetail",
    data() {
        return {
            BoardContent : [],
            dateTime: ""
        }
    },
    mounted() {
        if ( this.$route.query.docId === null){
            this.$router.replace("/event")
        }
        db.collection("event").doc(this.$route.query.docId).get().then((data)=>{
            this.BoardContent = data.data()
        }).then(()=>{
            db.collection("event").doc(this.$route.query.docId).get().then((update)=>{
                this.BoardContent = update.data();
                const date = this.BoardContent.date.seconds*1000 + this.BoardContent.date.nanoseconds/1000000;
                const new_date = new Date(date);
                //밀리세컨드초를 date객체로 변환한다
                const formattedDate = (''+new_date.getFullYear()).slice(-2)+'-'+ ('0'+( new_date.getMonth()+1)).slice(-2)+'-'+('0'+ new_date.getDate()).slice(-2)+' '+('0'+ new_date.getHours()).slice(-2)+':'+('0'+ new_date.getMinutes()).slice(-2)+':'+('0'+ new_date.getSeconds()).slice(-2)+'';
                return this.dateTime = formattedDate;
            })
        })
    },
    methods: {
        Delete(){
            let msg = confirm("삭제된 데이터는 복구할 수 없습니다 \r\r 삭제하시겠습니까?")
            if (msg){
                db.collection("event").doc(this.$route.query.docId).delete().then(() => {
                    alert("게시물이 삭제되었습니다.");
                    this.$router.replace("/event")
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
            }
        }
    }
  }
  </script>
  <style>
    
  </style>