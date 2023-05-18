<template>
    <section>
        <div class="bg-[#cbcbcb] w-full flex flex-col justify-center items-center">
            <h2 class=" font-bold text-2xl sm:text-4xl relative pt-20 pb-4"><span
                    class="w-20 h-[2px] bg-black absolute bottom-0 left-1/2 -translate-x-1/2 inline-block"></span>SignUp
            </h2>
            <p class="py-2">회원가입</p>
            <p class="px-20 pb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nam earum corporis
                minima praesentium libero accusantium, odit fugit quo tempora dolor porro dolorem laborum labore omnis
                maxime, alias ipsum. Impedit, magnam natus eos cupiditate officiis esse! Nostrum eligendi officia assumenda!
            </p>
        </div>
        <div class="mt-20 flex flex-col gap-y-5 w-96 mx-auto">
            <input type="text" placeholder="닉네임" v-model="nickname" class="py-3 px-5 border-[#a1a1a1] border">
            <input type="email" placeholder="이메일 주소" v-model="email" class="py-3 px-5 border-[#a1a1a1] border">
            <input type="password" placeholder="비밀번호" v-model="password" class="py-3 px-5 border-[#a1a1a1] border">
            <input type="password" placeholder="비밀번호 확인" v-model="passwordChk" class="py-3 px-5 border-[#a1a1a1] border">
            <input type="tel" placeholder="전화번호" class="py-3 px-5 border-[#a1a1a1] border">
            <button class="bg-[#b3b3b3] text-2xl py-4 font-bold" @click="signUp">회원가입</button>
        </div>
    </section>
</template>

<script>
import { auth } from '../firebase'
export default {
    name: "MemberPage",
    data() {
        return {
            email: "",
            password: "",
            nickname: "",
            errorMsg: "",
            passwordChk: ""
        }
    },
    methods: {
        signUp() {
            if (this.password === this.passwordChk && this.password !== '') {
                auth.createUserWithEmailAndPassword(this.email, this.password).then((result) => {
                    result.user.updateProfile({ displayName: this.nickname })
                })
                alert("thank you")
                this.$router.replace('/')
            } else if(this.password !== this.passwordChk){
                alert('비밀번호가 일치하지 않습니다.')
            } else if(this.password === ''){
                alert('작성이 완료되지 않았습니다.')
            }


        }
    }
}
</script>

<style lang="scss" scoped></style>