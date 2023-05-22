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
        <div class="mt-5 basis-full">
            <h4 class="text-xl mb-5">조리과정</h4>
            <ol class="cook w-full my-2">
                <li class="flex flex-wrap items-center">
                    <span class="basis-1/12 text-center">1</span>
                    <textarea class="border basis-11/12 lg:basis-8/12 mb-1" row="1"></textarea>
                    <input type="file" class="basis-60 mx-0 lg:mx-auto">
                </li>
            </ol>
            <button class="border border-vege-400 hover:bg-vege-400 hover:text-white px-10 py-1 rounded-full" @click="addList">+ 과정 추가</button>
        </div>
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
            QNT:"",
            COOKING_TIME:"",
            LEVEL_NM:"",
            file: "",
            COOKING:[],
            date: new Date(),
            fileRandom: null
        }
    },
    mounted() {
        const formattedDate = this.GetDate();
        this.fileRandom = formattedDate
    },
    methods: {
        addList(){
            let cook = document.querySelector(".cook")
            const idx = cook.childElementCount
            if(idx>=20){
                alert("조리과정은 20개를 넘을 수 없습니다.")
                return;
            }
            const li = document.createElement('li')
            li.classList.add("flex","flex-wrap","items-center");
            li.innerHTML = `<span class="basis-1/12 text-center">`+(idx+1)+`</span><textarea class="border basis-11/12 lg:basis-8/12 mb-1" row="1"></textarea><input type="file" class="basis-60 mx-0 lg:mx-auto">`
            cook.appendChild(li)
        },
        GetDate() {
            const new_date = new Date();
            const RandomNum = Math.floor(Math.random() * 999) + 100;
            const formattedDate = ('' + new_date.getFullYear()) + ('0' + (new_date.getMonth() + 1)).slice(-2) + ('0' + new_date.getDate()).slice(-2) + '_' + ('0' + new_date.getHours()).slice(-2) + ('0' + new_date.getMinutes()).slice(-2) + ('0' + new_date.getSeconds()).slice(-2) + '' + RandomNum;
            return formattedDate
        },
        write() {
            const cook = document.querySelector(".cook");
            const idx = cook.childElementCount;            
            for(let i=0; i < idx; i++){
                const li = cook.getElementsByTagName("li")[i];
                const cookingDc = li.getElementsByTagName("textarea")[0].value
                let cookingFile = li.getElementsByTagName("input")[0].files[0];
                
                storage.ref().child("recipes/" + this.fileRandom + i).put(cookingFile).then(() => {
                    storage.ref().child("recipes/" + this.fileRandom + i).getDownloadURL().then((url) => {
                        this.COOKING.push(
                                    {
                                COOKING_NO:i+1,
                                COOKING_DC:cookingDc,
                                COOKING_FILE: url
                            }
                        )
                    })
                }).catch((error)=>{console.log(error)})
            }
            this.COOKING.sort((a,b)=> a.COOKING_NO - b.COOKING_NO)
            setTimeout(()=>{
                this.file = document.querySelector("#image").files[0];
                storage.ref().child("files/" + this.fileRandom).put(this.file).then(() => {
                    storage.ref().child("files/" + this.fileRandom).getDownloadURL().then((url) => {
                        //파일 경로 가져오기
                        db.collection("community").add({
                            "author": this.author,
                            "title": this.title,
                            "content": this.content,
                            "date": this.date,
                            "uid": this.$store.state.uid,
                            "file": url,
                            "ingre":this.ingre,
                            "QNT":this.QNT,
                            "COOKING_TIME":this.COOKING_TIME,
                            "LEVEL_NM":this.LEVEL_NM,
                            "COOKING":this.COOKING,
                            "hit":0,
                            "likeddate":[],
                            "likedlist":[],
                            "liked":0
                        })
                        this.$router.replace("/recipe")
                    })
                })
            },1000)
        }
    },
}
</script>
<style></style>