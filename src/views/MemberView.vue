<template>
  
    <section>
       <div class="w-full flex justify-center pt-56">
           <div class="mx-auto basis-[32.5%] border-red-500 border rounded-2xl">
               <h3 class="text-center border-red-300 text-red-500 font-extrabold text-2xl pb-12 pt-12">Sign In</h3>
               <div class="flex flex-wrap jutify-center gap-y-5">

                 <input type="email" placeholder="email" v-model="email" class="text-center border h-12 border-red-500 w-3/4 rounded-full placeholder:text-center gap-y-5 center mx-auto">

                 <input type="password" placeholder="password" v-model="password" class="text-center w-3/4 border border-red-500 rounded-full  h-12 placeholder:text-center mx-auto">

                 <input type="tel" placeholder="Tel." class="text-center w-3/4 h-12 border border-red-500 rounded-full placeholder:text-center mx-auto">

                 <input type="text" placeholder="nick name" v-model="nickname" class="w-3/4 h-12 border border-red-500 rounded-full placeholder:text-center mx-auto text-center">

               </div>
               <button type="submit" class="w-full bg-gray-600 hover:bg-red-500 text-white text-2xl p-2 rounded-xl mt-6" @click="signUp">Submit</button>
               
             </div>
         </div>
         <!-- {{ email }}
         {{ password }}
         {{ nickname }}
         {{ errorMsg }} -->
    </section>
    
</template>

<script>
import {auth} from '../firebase'
    export default {
        name:"MemberPage",
        data() {
            return {
                email:"",
                password:"",
                nickname:"",
                errorMsg:""
            }
        },
        methods :{
            signUp(){
                auth.createUserWithEmailAndPassword(this.email,this.password).then((result)=>{
                    result.user.updateProfile({displayName:this.nickname})
                })
                alert("thank you")
                this.$router.replace('/')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>