<template>
    <div class="basis-full">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-wrap">
                <label for="title">제목</label><input v-model="title" type="text" id="title" class="border basis-5/12">
                <label for="author">작성자</label><input v-model="author" type="text" id="author" class="border basis-5/12">
            </div>
            <textarea v-model="content" class="border w-full"></textarea>
            <input type="file" id="image" required>
            <div>
                <button @click="write" class="bg-indigo-400 hover:bg-indigo-600">등록하기</button>
            </div>
        </div>
    </div>
</template>
<script>
import { db, storage } from '../../firebase'
export default {
    name: "communityWrite",
    data() {
        return {
            title: "",
            author: this.$store.state.displayName,
            content: "",
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
                        this.$router.replace("/community")
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
                this.$router.replace("/community")
            }
        }
    },
}
</script>
<style></style>