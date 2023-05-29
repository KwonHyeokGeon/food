<template>
    <div class="flex flex-wrap border-y py-10 border-vege-600">
        <div class="basis-full flex flex-wrap justify-between items-center">
            <label for="title">제목</label><input v-model="title" type="text" id="title" class="border basis-8/12 px-2 py-1">
            <label for="author">작성자</label><input v-model="author" type="text" id="author" class="border basis-2/12 px-2 py-1">
        </div>
        <textarea v-model="content" class="border basis-full mt-2 mb-5 p-3" rows="15"></textarea>
        <input type="file" id="image" required>
    </div>
    <div class="w-full flex justify-end pt-10">
        <button @click="write" class="px-4 py-2 rounded text-white bg-vege-200 hover:bg-vege-400">등록하기</button>
    </div>
</template>
<script>
import { db, storage } from '../../firebase'
export default {
    name: "ArticleWrite",
    data() {
        return {
            title: "",
            author: this.$store.state.displayName,
            content: "",
            file: "",
            date: new Date(),
            fileRandom: null,
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
                        db.collection("article").add({
                            "author": this.author,
                            "title": this.title,
                            "content": this.content,
                            "date": this.date,
                            "uid": this.$store.state.uid,
                            "file": url,
                        })
                        this.$router.replace("/articles")
                    })
                })
            } else {
                db.collection("article").add({
                    "author": this.author,
                    "title": this.title,
                    "content": this.content,
                    "date": this.date,
                    "uid": this.$store.state.uid,
                })
                this.$router.replace("/articles")
            }
        }
    },
}
</script>
<style></style>