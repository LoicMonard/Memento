<template>
  <div class="navbar-component">
    <div class="leftNavbar">
      <span id="brand">GOLOB</span>
      <span id="searchButton" @click="toggleSearch"><img src="./images/search_black.png"alt="search logo"></span>
      <input type="text" id="searchField">
    </div>

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
    },
    toggleSearch() {
      document.getElementById('searchField').style.width = '100px';
      document.getElementById('searchField').focus();
    }
  }
}
</script>

<style lang="less" src="./styles/navbar2.less">

</style>
