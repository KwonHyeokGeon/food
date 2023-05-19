<template>
    <div class="flex flex-wrap border-y py-5 border-vege-600">
        <h4 class="text-xl mb-5">요리정보</h4>
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
            <div class="basis-full mt-5 flex gap-x-5 pl-0 xl:pl-[108px]">
                <label for="QNT">인원</label><select v-model="QNT" id="QNT" class="border">
                <option value="1인분" selected>1인분</option>
                <option value="2인분">2인분</option>
                <option value="3인분">3인분</option>
                <option value="4인분">4인분</option>
                <option value="5인분">5인분</option>
                <option value="6인분 이상">6인분 이상</option>
                </select>
                <label for="COOKING_TIME">시간</label><select v-model="COOKING_TIME" id="COOKING_TIME" class="border">
                <option value="5분 이내" selected>5분 이내</option>
                <option value="10분 이내">10분 이내</option>
                <option value="15분 이내">15분 이내</option>
                <option value="20분 이내">20분 이내</option>
                <option value="30분 이내">30분 이내</option>
                <option value="60분 이내">60분 이내</option>
                <option value="90분 이내">90분 이내</option>
                <option value="2시간 이내">2시간 이내</option>
                <option value="2시간 이상">2시간 이상</option>
                </select>
                <label for="LEVEL_NM">난이도</label><select v-model="LEVEL_NM" id="LEVEL_NM" class="border">
                <option value="초보환영" selected>초보환영</option>
                <option value="보통">보통</option>
                <option value="어려움">어려움</option>
                </select>
            </div>
            <div class="basis-full flex justify-between pb-5 border-b">
                <span class="basis-1/5 xl:basis-1/12">재료</span>
                <textarea v-model="ingre" class="border basis-4/5 xl:basis-11/12 p-3"></textarea>
            </div>
        </div>
        <div class="mt-5">
            <h4 class="text-xl mb-5">조리과정</h4>
            <ul class="cook">
                <li v-for="(e,i) in COOKING" :key="i">
                    <span>{{ e.COOKING_NO }}</span>
                    <textarea :v-model="e.COOKING_DC" class="border"></textarea>
                    <input type="file" :id="'step'+i+'file'" class="border">
                </li>
            </ul>
            <button class="bg-vege-200 w-10 h-10 rounded-full" @click="addList">과정 추가</button>
        </div>
    </div>
    <div class="w-full flex justify-end pt-10">
                <button @click="modify" class="px-4 py-2 rounded text-white bg-vege-200 hover:bg-vege-400">수정하기</button>
    </div>
</template>
<script>
import {db} from '../../firebase'
export default {
  name:"communityModify",
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
      if ( this.$store.state.communityId === 0){
          this.$router.replace("/recipe")
      }
      db.collection("community").doc(this.$store.state.communityId).get().then((data)=>{
              this.BoardContent = data.data(),
              this.author = this.BoardContent.author;
              this.title = this.BoardContent.title;
              this.content = this.BoardContent.content;
      })
  },
  methods: {
        addList(){
            let cook = document.querySelector(".cook")
            const idx = cook.childElementCount
            const li = document.createElement('li')
            li.innerHTML = `<span>`+(idx+1)+`</span> <textarea :v-model="e.COOKING_DC" class="border"></textarea><input type="file" :id="'step'+i+'file'" class="border">`
            cook.appendChild(li)
        },
      modify(){
          db.collection("community").doc(this.$store.state.communityId).update({"author":this.author,"title": this.title, "content":this.content,"date":this.date}).then(()=>{
              alert("수정이 완료되었습니다.");
              this.$router.replace("/recipe");
          })
      }
  },
}
</script>
<style>
  
</style>