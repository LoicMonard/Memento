<template>
  <div class="navbar-component">
    <span id="brand">Brand</span>

    <nav class="navigation">
      <span id="option">OPTION</span>
      <span id="option">OPTION</span>
      <span id="option">OPTION</span>
      <span id="option">OPTION</span>
      <span id="option"><img src="./images/person_black.png"></span>
    </nav>

    <span id="dropdown-button"><img src="./images/person_black.png"></span>
    <nav class="dropdown-menu">
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
