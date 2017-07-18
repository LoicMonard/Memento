<template>
  <div class="navbar-component">
    <span id="brand">GOLOB</span>

    <nav class="navigation">
      <span id="option">OPTION</span>
      <span id="option">OPTION</span>
      <span id="option">OPTION</span>
      <span id="option">OPTION</span>
      <span id="option"><img src="./images/person_black.png"></span>
    </nav>

    <span id="dropdown-button" @click="toggleMenu"><img src="./images/person_black.png"></span>
    <nav class="dropdown-menu" v-if="menuActive">
      <span id="option">OPTION</span>
      <span id="option">OPTION</span>
      <span id="option">OPTION</span>
      <span id="option">OPTION</span>
    </nav>
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

<style lang="less" src="./styles/navbar2.less">

</style>
