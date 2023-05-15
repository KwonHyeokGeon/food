<template>
    <section>
            <div class="w-full flex justify-center pt-52 mb-28">
                <div class="mx-auto basis-[32.5%] border-red-500 border rounded-2xl">
                    <h3 class="text-center border-red-300 text-red-500 font-extrabold text-2xl pb-8 pt-8">Log In</h3>
                    <p class="mx-auto w-3/4 text-sm text-center mb-5">Hello, please enter your email address to subscribe our newsletters.</p>
                    <div class="flex flex-wrap jutify-center gap-5 ">
                      <input type="email" placeholder="email" v-model="email" class="border h-12 border-red-500 w-3/4 rounded-full placeholder:text-center gap-y-5 center mx-auto">
                      <input type="password" placeholder="password" v-model="password" class=" w-3/4 border border-red-500 rounded-full  h-12 placeholder:text-center mx-auto mb-5">
                      <!-- <input type="tel" placeholder="Tel." class="w-3/4 h-12 border border-green-500 rounded-full placeholder:text-center mx-auto">
                      <input type="text" placeholder="nick name" class="w-3/4 h-12 border border-green-500 rounded-full placeholder:text-center mx-auto"> -->
                    </div>
                    <button type="submit" class="w-full bg-gray-600 hover:bg-red-600 text-white text-2xl p-2 rounded-xl mt-3" @click="login">Submit</button>
                    
                </div>
            </div>
         </section>
  </template>

<script>
import {auth} from "../firebase"
    export default {
        name:"LoginPage",
        data() {
            return {
                email:"",
                password:"",
                // errorMsg:""
            }
        },
        methods: {
      login(){
        if(!this.email){
          alert("이메일을 입력해주세요");
          return false
          // return false :  더이상 돌지말고 그만 
        }
        if(!this.password){
          alert("비밀번호를 입력해주세요");
          return false;
        }
        auth.signInWithEmailAndPassword(this.email,this.password).then(((user)=>{
          console.log(user.user)
          // sessionStorage.setItem("refreshToken",user.user.refreshToken)
          // sessionStorage.setItem("displayName",user.user.displayName)
          if(user.user.refreshToken){
            this.$store.commit("loginToken", {refreshToken:user.user.refreshToken, uid:user.user.uid})
          }

          this.$router.replace('/')
          window.scrollTo({top:0,behavior:'auto'})
          alert('thank You')
          // 로그인되면 메인페이지로 이동
          // 로그인 되면서 바로 홈 페이지 제일 상단으로 이동
          // behavior 를 smooth 로 하면 스크롤 효과가 나옴.
        }),
        ((error)=>{
          this.errorMsg=error.message
        })
        )
      }
      
    }
    }
</script>

<style lang="scss" scoped>

</style>