<template>
    <div class="flex flex-wrap border-y py-10 border-vege-600">
        <div class="basis-full flex flex-wrap justify-between items-center">
            <label for="title">제목</label><input v-model="title" type="text" id="title" class="border basis-8/12 px-2 py-1">
            <label for="author">작성자</label><input v-model="author" type="text" id="author" class="border basis-2/12 px-2 py-1">
        </div>
        <textarea v-model="content" class="border basis-full mt-2 mb-5 p-3"></textarea>
    </div>
    <div class="w-full flex justify-end pt-10">
                <button @click="modify" class="px-4 py-2 rounded text-white bg-vege-200 hover:bg-vege-400">수정하기</button>
    </div>
</template>
<script>
import {db} from '../../firebase'
export default {
    name:"NoticeModify",
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
        if ( this.$store.state.noticeId === 0){
            this.$router.replace("/notices")
        }
        db.collection("notice").doc(this.$store.state.noticeId).get().then((data)=>{
                this.BoardContent = data.data(),
                this.author = this.BoardContent.author;
                this.title = this.BoardContent.title;
                this.content = this.BoardContent.content;
        })
    },
    methods: {
        modify(){
            db.collection("notice").doc(this.$store.state.noticeId).update({"author":this.author,"title": this.title, "content":this.content,"date":this.date}).then(()=>{
                alert("수정이 완료되었습니다.");
                this.$router.replace("/notices");
            })
        }
    },
}
</script>
<style>
    
</style>