<template>
    <div class="w-full border-y py-10 border-vege-600">
        <div class="flex flex-wrap justify-between items-center">
            <label for="title" class="basis-1/12">제목</label><input v-model="title" type="text" id="title" class="border basis-7/12 px-2 py-1">
            <label for="author" class="basis-1/12">작성자</label><input v-model="author" type="text" id="author" class="border basis-2/12 px-2 py-1">
        </div>
        <textarea v-model="content"  class="border w-full mt-2 p-3"></textarea>
    </div>
    <div class="w-full flex justify-end pt-10">
        <button @click="write" class="px-4 py-2 rounded text-white bg-vege-200 hover:bg-vege-400">등록하기</button>
    </div>
</template>
<script>
import {db} from '../../firebase'
export default {
    name:"QnaWrite",
    data() {
        return {
            title:"",
            author:this.$store.state.displayName,
            content:"",
            date: new Date(),
        }
    },
    mounted() {
    },
    methods: {
        write(){
                db.collection("qna").add({
                    "author":this.author,
                    "title": this.title,
                    "content":this.content,
                    "date":this.date,
                    "uid" : this.$store.state.uid,
                    "reply": []
                })
                this.$router.replace("/cs/qna")
            }
        }
    }
</script>
<style>
    
</style>