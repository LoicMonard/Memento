<template>
  <div class="navbar">
    <span id="title">Hey</span>
    <div class="more">
      <span id="more_logo" @click="toggleMenu()"><img src="./assets/more_white.png" alt="More logo"></span>
      <ul class="more_menu" v-if="menuActive">
        <li id="item1">Un</li>
        <li id="item2">Deux</li>
        <li id="item3">Trois</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      menuActive: ''
    }
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    }
  }
}
</script>

<style lang="less" src="./styles/navbar.less">

</style>
