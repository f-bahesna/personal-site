<template>
  <div class="container flex flex-col px-6 pt-12 sm:py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
    <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
      <div class="max-w-lg md:mx-12 md:order-2 text-center sm:text-left">
        <h1 class="text-3xl font-medium tracking-wide md:text-4xl" alt="frada">Hi! <span class="font-bold">I'm Frada</span></h1>
        <p class="mt-4" alt="introducing lianum frada bahesna">Software Engineer Specializing in Backend <br> Currently working at a Fintech Startup based in <span class="text-2xl">INDONESIA</span></p>
        <div class="mt-4 sm:mt-9">
          <a href="#" class="block px-12 py-4 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-sm md:inline hover:bg-blue-400">Get in touch</a>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center w-full h-96 md:w-1/2">
      <img class="object-cover w-1/2 h-1/2 sm:h-full max-w-2xl -mt-12 sm:mt-0 rounded-md" src="src/assets/frada.JPG" alt="lianum frada bahesna">
    </div>
  </div>
  <follow-me />
</template>

<script>
import FollowMe from "./page/followMe.vue";
export default {
  name: "Home",
  components: {FollowMe}
}
</script>

<style scoped>

</style>