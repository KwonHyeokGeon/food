<template>
    <div>
        <div>
            {{BoardContent.title}}
        </div>
        <div class="basis-full flex text-center">
            <p><span>작성자</span>{{BoardContent.author}}</p>
            <p><span>작성일시</span>{{dateTime}}</p>

        </div>
    </div>
    <div >
        {{ BoardContent.content }}
        <img v-if="BoardContent.file" :src="BoardContent.file" alt="첨부파일">
    </div>
    <div class="flex justify-between">
        <div>
            <router-link to="/event/list" class="bg-indigo-400 hover:bg-indigo-600">목록으로</router-link>
        </div>
        <div class="flex gap-x-5">
            <router-link to="/event/modify" class="bg-indigo-400 hover:bg-indigo-600">수정</router-link>
            <button @click="Delete()" class="bg-red-400 hover:bg-red-600">삭제</button>
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