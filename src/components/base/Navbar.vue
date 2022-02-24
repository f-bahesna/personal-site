<template>
   <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between
        py-6 px-12 bg-white shadow sm:items-baseline w-full">

      <div class="mb-2 sm:mb-0 sm:pl-12">
        <a href="#" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Frada</a>
      </div>

     <div class="">
        <a href="#" class="text-lg no-underline text-grey-darkest hover:text-blue-dark hover:underline ml-4">About</a>
        <a href="#" class="text-lg no-underline text-grey-darkest hover:text-blue-dark hover:underline ml-4">Experiences</a>
        <a href="#" class="text-lg no-underline text-grey-darkest hover:text-blue-dark hover:underline ml-4">Blogs</a>
      </div>

     <div class="pt-5 sm:pt-0 sm:pr-12"><Toogle :mode="mode" @toggle="$emit('toggle')"/></div>

   </nav>
</template>

<script>

import Toogle from "./Toogle.vue";
export default {
  name: "Navbar",
  components: {Toogle},
  props: ['mode']
}
</script>

<style scoped>
.dark nav {
  background: #15202B;
}
</style>