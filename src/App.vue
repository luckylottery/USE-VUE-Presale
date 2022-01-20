<template>
  <div id="app">
    <header style="background-color: #fff">
      <div id="nav">
        <router-link to="/" class="navbar">
          <img src="@/assets/images/logo-light-theme-2.png" alt="">
        </router-link>
        <div class="links">
          <router-link to="/about">About crosswise</router-link>
          <router-link to="/summary">Tokenomics</router-link>
          <router-link to="/resource">Roadmap</router-link>
          <router-link to="/contact">Team</router-link>
          <router-link to="/system">Socials</router-link>
        </div>
      </div>
      <div id="social"> 
        <img src="@/assets/images/light-theme-icon.png" alt="">
        <router-link to="/app"><button to="/app" class="btn-app">Connect</button></router-link>
        <router-link to="/app"><button to="/app" class="btn-app">How to Buy</button></router-link>
        <router-link to="/app"><button to="/app" class="btn-app">Get Whitelisted</button></router-link>
      </div>

    </header>
    <router-view/>
  </div>
</template>
<script>
const throttle = (func, limit=1) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}
export default {
  data(){
    return{
    }
  },
  computed:{
  },
  mounted(){
  },
  methods:{
  },
}
</script>
<style>
  @import url('./assets/css/App.css');
</style>
