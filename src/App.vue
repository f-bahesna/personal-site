<template>
  <div class="app mx-auto" :class="mode">
    <Navbar :mode="mode" @toggle="toggle"/>
    <router-view />
  </div>
<!--  TODO: 1. continue follow me section 2. Hero image right 3. Footer 4. Dark Mode rollback to light after refreshed -->
</template>

<script>
import Navbar from "./components/base/Navbar.vue";
export default {
  data () {
    return {
      mode: 'light'
    }
  },
  components: {Navbar},
  created () {
    window.addEventListener('keyup', this.keyPress)
  },
  methods: {
    keyPress (e) {
      if (e.key === 't') {
        this.toggle()
      }
    },
    toggle () {
      if (this.mode === "dark") {
        this.mode = "light"
      } else {
        this.mode = "dark"
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.app {
  width: 100vw;
  min-height: 100vh;
  background: #F3F3F3;
  color: #15202B;
  transition: background 0.3s ease-in-out;
}

.dark {
  background: #192734;
  color: #E8E8E8;
}

</style>
