<template>
    <div class="flex flex-wrap">
        <label for="title">제목</label><input v-model="title" type="text" id="title" class="border">
        <label for="author">작성자</label><input v-model="author" type="text" id="author" class="border">
    </div>
    <textarea v-model="content" class="border w-full my-10 h-24"></textarea>
    <div class="flex justify-end">
        <button @click="modify" class="px-4 py-2 rounded text-white bg-vege-200 hover:bg-vege-400">수정하기</button>
    </div>
</template>
<script>
import {db} from '../../firebase'
export default {
    name:"QnaModify",
    data() {
        return {
            BoardContent : [],
            author: this.$store.state.displayName,
            title:"",
            content:"",
            date: new Date(),
            reply: []
        }
    },
    mounted() {
        if ( this.$store.state.qnaId === 0){
            this.$router.replace("/service/qna")
        }
        db.collection("qna").doc(this.$store.state.qnaId).get().then((data)=>{
                this.BoardContent = data.data(),
                this.author = this.BoardContent.author;
                this.title = this.BoardContent.title;
                this.content = this.BoardContent.content;
                this.reply = this.BoardContent.reply;
        })
    },
    methods: {
        modify(){
            db.collection("qna").doc(this.$store.state.qnaId).update({"author":this.author,"title": this.title, "content":this.content,"date":this.date, "reply": this.reply}).then(()=>{
                alert("수정이 완료되었습니다.");
                this.$router.replace("/service/qna");
            })
        }
    },
}
</script>
<style>
    
</style>