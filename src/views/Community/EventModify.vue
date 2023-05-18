<template>
    <div class="basis-full">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-wrap">
                <label for="title">제목</label><input v-model="title" type="text" id="title" class="border">
                <label for="author">작성자</label><input v-model="author" type="text" id="author" class="border">
            </div>
            <textarea v-model="content" class="border w-full my-10 h-24"></textarea>
            <div class="flex justify-end">
                <button @click="modify" class="bg-indigo-400">수정하기</button>
            </div>
        </div>
    </div>
  </template>
  <script>
  import {db} from '../../firebase'
  export default {
    name:"EventModify",
    data() {
        return {
            BoardContent : [],
            author: this.$store.state.displayName,
            title:"",
            content:"",
            date: new Date()
        }
    },
    mounted() {
        if ( this.$store.state.eventId === 0){
            this.$router.replace("/event")
        }
        db.collection("event").doc(this.$store.state.eventId).get().then((data)=>{
                this.BoardContent = data.data(),
                this.author = this.BoardContent.author;
                this.title = this.BoardContent.title;
                this.content = this.BoardContent.content;
        })
    },
    methods: {
        modify(){
            db.collection("event").doc(this.$store.state.eventId).update({"author":this.author,"title": this.title, "content":this.content,"date":this.date}).then(()=>{
                alert("수정이 완료되었습니다.");
                this.$router.replace("/event");
            })
        }
    },
  }
  </script>
  <style>
    
  </style>