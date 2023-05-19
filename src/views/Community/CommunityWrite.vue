<template>
    <div class="flex flex-wrap border-y py-10 border-vege-600">
        <div class="basis-full flex flex-wrap justify-between items-center gap-y-2">
            <label for="title" class="basis-1/5 xl:basis-1/12">제목</label><input v-model="title" type="text" id="title" class="border basis-4/5 xl:basis-8/12 px-2 py-1">
            <label for="author" class="basis-1/5 xl:basis-1/12 pl-0 xl:pl-3">작성자</label><input v-model="author" type="text" id="author" class="border basis-4/5 xl:basis-2/12 px-2 py-1">
        </div>
        <div class="basis-full flex flex-wrap mt-4 gap-y-2">
            <div class="basis-full flex justify-between">
                <span class="basis-1/5 xl:basis-1/12">요리 설명</span>
                <input type="text" v-model="content" class="border basis-4/5 xl:basis-11/12 p-3">
            </div>
            <span class="basis-1/5 xl:basis-1/12">완성이미지</span><input type="file" id="image" required>
            <div class="basis-full mt-5">
                <label for="howMany">인원</label><input type="text" v-model="howMany" id="howMany">
                <label for="howLong">시간</label><input type="text" v-model="howLong" id="howLong">
                <label for="howDifficult">난이도</label><input type="text" v-model="howDifficult" id="howDifficult">
            </div>
            <div class="basis-full flex justify-between">
                <span class="basis-1/5 xl:basis-1/12">재료</span>
                <textarea v-model="ingre" class="border basis-4/5 xl:basis-11/12 p-3"></textarea>
            </div>
        </div>
    </div>
    <div>
        <ul>
            <li></li>
        </ul>
    </div>
    <div class="w-full flex justify-end pt-10">
        <button @click="write" class="px-4 py-2 rounded text-white bg-vege-200 hover:bg-vege-400">등록하기</button>
    </div>
</template>
<script>
import { db, storage } from '../../firebase'
export default {
    name: "CommunityWrite",
    data() {
        return {
            title: "",
            author: this.$store.state.displayName,
            content: "",
            ingre:"",
            howMany:"",
            howLong:"",
            howDifficult:"",
            file: "",
            date: new Date(),
            fileRandom: null
        }
    },
    mounted() {
        const formattedDate = this.GetDate();
        this.fileRandom = formattedDate
    },
    methods: {
        GetDate() {
            const new_date = new Date();
            const RandomNum = Math.floor(Math.random() * 999) + 100;
            const formattedDate = ('' + new_date.getFullYear()) + ('0' + (new_date.getMonth() + 1)).slice(-2) + ('0' + new_date.getDate()).slice(-2) + '_' + ('0' + new_date.getHours()).slice(-2) + ('0' + new_date.getMinutes()).slice(-2) + ('0' + new_date.getSeconds()).slice(-2) + '' + RandomNum;
            return formattedDate
        },
        write() {
            this.file = document.querySelector("#image").files[0];
            if (this.file) {
                storage.ref().child("files/" + this.fileRandom).put(this.file).then(() => {
                    storage.ref().child("files/" + this.fileRandom).getDownloadURL().then((url) => {
                        //파일 경로 가져오기
                        db.collection("community").add({
                            "author": this.author,
                            "title": this.title,
                            "content": this.content,
                            "date": this.date,
                            "uid": this.$store.state.uid,
                            "file": url
                        })
                        this.$router.replace("/recipe")
                    })
                })
            } else {
                db.collection("community").add({
                    "author": this.author,
                    "title": this.title,
                    "content": this.content,
                    "date": this.date,
                    "uid": this.$store.state.uid
                })
                this.$router.replace("/recipe")
            }
        }
    },
}
</script>
<style></style>