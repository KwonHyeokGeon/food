<template>
    <div class="border-y border-vege-600 p-5 flex flex-wrap">
        <div class="basis-full md:basis-1/2">
            <div class="relative">
                <img v-if="BoardContent.file" :src="BoardContent.file" alt="첨부파일" class="mx-auto mt-5">
                <button class="absolute bottom-3 right-3 rounded-full w-10 h-10" :class="heartOn? 'bg-point': 'bg-gray-400'" @click="liked"><img :src="require(`@/assets/img/heart.png`)" alt="좋아요" class="w-2/3 mx-auto"></button>
            </div>
        </div>
        <div class="basis-full md:basis-1/2 pl-0 md:pl-5">
            <h2 class="text-2xl font-bold">
                {{BoardContent.title}}
            </h2>
            <div class="flex text-sm gap-x-3 pb-3 border-b-0 md:border-b mt-1">
                <p class="relative after:absolute after:inline-block after:bg-vege-200/50 after:w-0.5 after:h-4 after:rounded-full after:-right-2 after:top-0.5"><span class="mr-1">조회수</span>{{ BoardContent.hit }}</p>
                <p class="relative after:absolute after:inline-block after:bg-vege-200/50 after:w-0.5 after:h-4 after:rounded-full after:-right-2 after:top-0.5"><span class="mr-1">추천수</span>{{ BoardContent.liked}}</p>
                <p><span class="mr-1">작성자</span>{{BoardContent.author}}</p>

            </div>
            <div class="mt-5 flex gap-x-5 flex-wrap">
                <p class="relative after:absolute after:inline-block after:bg-vege-200/50 after:w-0.5 after:h-4 after:rounded-full after:-right-2.5 after:top-1"><span class="font-bold mr-1">인원:</span> {{ BoardContent.QNT }}</p>
                <p class="relative after:absolute after:inline-block after:bg-vege-200/50 after:w-0.5 after:h-4 after:rounded-full after:-right-2.5 after:top-1"><span class="font-bold mr-1">소요시간:</span> {{ BoardContent.COOKING_TIME }}</p>
                <p><span class="font-bold mr-1">난이도:</span> {{ BoardContent.LEVEL_NM }}</p>
                <div class="basis-full border-t py-5">
                    <h5 class="text-xl font-bold">재료</h5>
                    <p class="">{{ BoardContent.ingre }}</p>
                    <div class="border-t py-5 whitespace-pre-line">
                        {{ BoardContent.content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 조리과정 -->
    <div class="basis-full">
        <ol class="flex gap-y-5 flex-wrap">
            <li v-for="e in Cooking" :key="e" class="basis-full flex flex-wrap justify-between border-b-0 py-2 px-[2%] lg:px-0">
                <span class="basis-1/5 order-2 lg:order-1 lg:basis-1/12 text-center text-4xl font-bold">{{ e.COOKING_NO }}</span>
                <div class="basis-full order-1 lg:order-2 lg:basis-5/12">
                    <img :src="e.COOKING_FILE" class="w-full">
                </div>
                <div class="basis-4/5 order-3 lg:order-3 lg:basis-5/12">
                    <p class="whitespace-pre-line">{{ e.COOKING_DC }}</p>
                </div>
            </li>
        </ol>
    </div>
    <div class="flex justify-between mt-10 items-center border-t border-vege-600 pt-10">
        <div>
            <router-link to="/recipe/list" class="px-4 py-2 rounded text-white bg-vege-200 hover:bg-vege-400">목록으로</router-link>
        </div>
        <div class="flex gap-x-5">
            <router-link to="/recipe/modify" class="px-4 py-2 rounded text-white bg-vege-200 hover:bg-vege-400">수정</router-link>
            <button @click="Delete()" class="px-4 py-2 rounded text-white bg-point/70 hover:bg-point">삭제</button>
        </div>
    </div>
</template>
<script>
import {db} from '../../firebase';
export default {
  name:"communityDetail",
  data() {
      return {
          BoardContent : [],
          dateTime: "",
          heartOn:false,
          Cooking:[],
          date:new Date(),
          likeddate:[],
          likedlist:[]
      }
  },
  mounted() {
      if ( this.$route.query.docId === null){
          this.$router.replace("/recipe")
      }
      db.collection("community").doc(this.$route.query.docId).get().then((data)=>{
          this.BoardContent = data.data()
          this.likeddate = data.data().likeddate;
          this.likedlist = data.data().likedlist;
          this.Cooking = this.BoardContent.COOKING
          if(this.likedlist.includes(this.$store.state.uid)){
            this.heartOn = true
        }
          db.collection("community").doc(this.$route.query.docId).update({
                hit: data.data().hit+1,
            })
      }).then(()=>{
          db.collection("community").doc(this.$route.query.docId).get().then((update)=>{
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
              db.collection("community").doc(this.$route.query.docId).delete().then(() => {
                  alert("게시물이 삭제되었습니다.");
                  this.$router.replace("/recipe")
              }).catch((error) => {
                  console.error("Error removing document: ", error);
              });
          }
      },
      liked(){
        if(this.heartOn === false){
            this.likeddate.push(this.date);
            this.likedlist.push(this.$store.state.uid);
            db.collection("community").doc(this.$route.query.docId).update({
                liked: this.BoardContent.liked + 1,
                heartOn: true,
                likeddate : this.likeddate,
                likedlist:this.likedlist
            }).then(()=>{
                db.collection("community").doc(this.$route.query.docId).get().then((data)=>{this.BoardContent = data.data()})
            })
            this.heartOn = true;
        }else{
            this.likedlist= this.likedlist.filter((e) => e !== this.$store.state.uid);
            db.collection("community").doc(this.$route.query.docId).update({
                liked: this.BoardContent.liked - 1,
                likedlist:this.likedlist,
                heartOn: false
            }).then(()=>{
                db.collection("community").doc(this.$route.query.docId).get().then((data)=>{this.BoardContent = data.data()})
            })
            this.heartOn = false;
        }
      }
  },
}
</script>
<style>
  
</style>