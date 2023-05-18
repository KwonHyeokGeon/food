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
              <router-link to="/member"><p class="text-[#a6a6a6] text-xs text-right">회원이 아니신가요?</p></router-link>
          </div>
          <div class="mt-14 flex flex-col justify-center items-center">
            <p class="text-sm font-bold">SNS로 로그인 하시겠습니까?</p>
            <ul>
              <li></li>
            </ul>
          </div>
      </section>
</template>

<script>
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
      }
      else if (!this.password) {
        alert("비밀번호를 입력해주세요");
        return false;
      }
      auth.signInWithEmailAndPassword(this.email, this.password).then(((user) => {
        console.log(user.user)
        sessionStorage.setItem("refreshToken",user.user.refreshToken)
        sessionStorage.setItem("displayName",user.user.displayName)
        if (user.user.refreshToken) {
          this.$store.commit("loginToken", { refreshToken: user.user.refreshToken, uid: user.user.uid })
        }

        this.$router.replace('/')
        window.scrollTo({ top: 0, behavior: 'auto' })
        // 로그인되면 메인페이지로 이동
        // 로그인 되면서 바로 홈 페이지 제일 상단으로 이동
        // behavior 를 smooth 로 하면 스크롤 효과가 나옴.
      }),
        ((error) => {
          this.errorMsg = error.message
        })
      )
    }

  },
}
</script>

<style></style>