<template>
  <div class="bg-vege-600 w-full mt-20 md:mt-0">
    <div class="max-w-7xl mx-auto flex flex-col justify-center items-center">
      <h2 class="font-bold text-3xl sm:text-4xl relative pt-20 pb-4 text-white">Event
        <span class="w-20 h-[2px] bg-white absolute bottom-0 left-1/2 -translate-x-1/2 inline-block"></span>
      </h2>
      <p class="py-2 text-white">이벤트</p>
      <p class="px-20 pt-5 pb-20 text-mayo">테스트테스트
      </p>
    </div>
  </div>
  <div class="max-w-7xl mx-auto  px-[2%] xl:px-0 my-24">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style></style>