<template>
  <section>
    <div class="bg-[#cbcbcb] w-full flex flex-col justify-center items-center">
      <h2 class=" font-bold text-2xl sm:text-4xl relative pt-20 pb-4">Login<span
          class="w-20 h-[2px] bg-black absolute bottom-0 left-1/2 -translate-x-1/2 inline-block"></span>
      </h2>
      <p class="py-2">로그인</p>
      <p class="px-20 pb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nam earum corporis
        minima praesentium libero accusantium, odit fugit quo tempora dolor porro dolorem laborum labore omnis
        maxime, alias ipsum. Impedit, magnam natus eos cupiditate officiis esse! Nostrum eligendi officia assumenda!
      </p>
    </div>
    <div class="mt-20 flex flex-col gap-y-5 w-96 mx-auto">
      <input type="email" placeholder="이메일 주소" v-model="email" class="py-3 px-5 border-[#a1a1a1] border">
      <input type="password" placeholder="비밀번호" v-model="password" class="py-3 px-5 border-[#a1a1a1] border">
      <button class="bg-[#b3b3b3] text-2xl py-4 font-bold border-black border" @click="login">로그인</button>
      <router-link to="/member">
        <p class="text-[#a6a6a6] text-xs text-right">회원이 아니신가요?</p>
      </router-link>
    </div>
    <div class="mt-14 flex flex-col gap-2 justify-center items-center">
      <p class="text-sm font-bold">SNS로 로그인 하시겠습니까?</p>
      <ul class="flex gap-4">
        <li class="border-2 rounded-full flex justify-center items-center p-1">
          <button @click="signInWithGoogle"><img :src="require(`@/assets/img/googleLogin.png`)" alt="구글로그인"
              class="w-8 h-8"></button>
        </li>
        <li class="border-2 rounded-full flex justify-center items-center p-1">
          <button @click="signInWithKakao"><img :src="require(`@/assets/img/kakaoLogin.png`)" alt="카카오로그인"
              class="w-8 h-8"></button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import firebase from "firebase/app";
import { auth } from "../firebase"
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    login() {
      if (!this.email) {
        alert("이메일을 입력해주세요");
        return false
        // return false :  더이상 돌지말고 그만 
      }
      else if (!this.password) {
        alert("비밀번호를 입력해주세요");
        return false;
      }
      else if (this.email && this.password) {
        auth.signInWithEmailAndPassword(this.email, this.password).then(((user) => {
          localStorage.setItem("refreshToken", user.user.refreshToken)
          localStorage.setItem("displayName", user.user.displayName)
          if (user.user.refreshToken) {
            this.$store.commit("loginToken", { refreshToken: user.user.refreshToken, uid: user.user.uid })
          }
          this.$router.replace('/')
          window.scrollTo({ top: 0, behavior: 'auto' })
        }),
          ((error) => {
            this.errorMsg = error.message
          })
        )
      }
    },
    signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      try {
        firebase.auth().signInWithPopup(provider).then((Res) => {
          console.log(Res);
          localStorage.setItem("refreshToken", Res.user.refreshToken)
          localStorage.setItem("displayName", Res.user.displayName)
          if (Res.user.refreshToken) {
            this.$store.commit("loginToken", { refreshToken: Res.user.refreshToken, uid: Res.user.uid })
          }
          this.$router.replace('/')
        })
      } catch (error) {
        this.errorMsg = error.message
      }
    },
    signInWithKakao() {
      window.Kakao.init('40efe3e8889c51f75afb99fa7d699b0a')
      window.Kakao.Auth.login({
        success: function (res) {
          localStorage.setItem("refreshToken", res.refresh_token)
          window.Kakao.API.request({
            url: '/v2/user/me',
            data: {
              property_keys: [
                "kakao_account.profile",
                "kakao_account.email"
              ]
            },
            success: async function (response) {
              localStorage.setItem("displayName", response.kakao_account.profile.nickname)
              localStorage.setItem("uid", response.id)
            },
            fail: function (error) {
              alert(error)
            },
          })
        },
        fail: function (error) {
          alert(error)
        },
      })
      this.$router.replace('/')
      this.$store.state.loginChk = true
    }
  },
}
</script>

<style></style>