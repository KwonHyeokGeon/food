<template>
    <div class="w-full">
        <div class="border-y-2 mb-10">
            <div>
                {{BoardContent.title}}
            </div>
            <div class="basis-full flex text-center">
                <p><span>작성자</span>{{BoardContent.author}}</p>
                <p><span>작성일시</span>{{dateTime}}</p>

            </div>
            {{ BoardContent.content }}
        </div>
        <div>
            <ul>
                <li v-for="e in BoardContent.reply" :key="e" class="flex justify-between border-b"><p>{{ e.content }}</p> <span>{{e.author}}</span></li>
            </ul>
        </div>
        <div class="flex justify-between bg-gray-100">
            댓글내용<textarea v-model="reply.content" class="border basis-2/3"></textarea>
            작성자<input type="text" v-model="reply.author" class="border">
            <button @click="Comment()" class="px-2 py-1 rounded text-white bg-vege-200 hover:bg-vege-400">등록하기</button>
        </div>
        <div class="flex justify-between mt-10 items-center">
            <div>
                <router-link to="/cs/qna/list" class="px-4 py-2 rounded text-white bg-vege-200 hover:bg-vege-400">목록으로</router-link>
            </div>
            <div class="flex gap-x-5">
                <router-link to="/cs/qna/modify" class="px-4 py-2 rounded text-white bg-vege-200 hover:bg-vege-400">수정</router-link>
                <button @click="Delete()" class="px-4 py-2 rounded text-white bg-point/70 hover:bg-point">삭제</button>
            </div>
        </div>
    </div>
</template>
<script>
import {db} from '../../firebase';
export default {
    name:"qnaDetail",
    data() {
        return {
            BoardContent : [],
            dateTime: "",
            reply:{
                content:"",
                author:this.$store.displayName
            }
        }
    },
    mounted() {
        if ( this.$route.query.docId === null){
            this.$router.replace("/cs/qna")
        }
        db.collection("qna").doc(this.$route.query.docId).get().then((data)=>{
            this.BoardContent = data.data()
        }).then(()=>{
            db.collection("qna").doc(this.$route.query.docId).get().then((update)=>{
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
                db.collection("qna").doc(this.$route.query.docId).delete().then(() => {
                    alert("게시물이 삭제되었습니다.");
                    this.$router.replace("/cs/qna")
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
            }
        },
        Comment(){
            this.BoardContent.reply.push(this.reply);
            db.collection("qna").doc(this.$store.state.qnaId).update({"reply":this.BoardContent.reply}).then(()=>{
                alert("댓글이 등록되었습니다.");
                db.collection("qna").doc(this.$route.query.docId).get().then((data)=>{
                    this.BoardContent = data.data()
                })
            })
        }
    }
}
</script>
<style>
    
</style>