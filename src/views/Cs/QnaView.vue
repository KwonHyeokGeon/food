<template>
    <div class="bg-vege-600 w-full">
      <div class="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <h2 class="font-bold text-3xl sm:text-4xl relative pt-20 pb-4 text-white">Q&A
          <span class="w-20 h-[2px] bg-white absolute bottom-0 left-1/2 -translate-x-1/2 inline-block"></span>
        </h2>
        <p class="py-2 text-white">질문과 답변</p>
        <p class="px-20 pt-5 pb-20 text-mayo">설명이 뭐시기저시기
        </p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto  px-[2%] xl:px-0 my-24">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: "QnaView"
}
</script>
<style>
    
</style>