<template>
  <div>
    <Navbar class="navbar"></Navbar>
    <Map class="map"></Map>
    <Items></Items>
  </div>
</template>

<script>
import Navbar from './navbar.vue'
import Map from './map.vue'
import Items from './items.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    Navbar,
    Map,
    Items
  }
}
</script>

<style>
@font-face {
  font-family: 'montserrat-extralight';
  src: url('./fonts/montserrat-ultra-light.woff');
  font-family: 'montserrat-light';
  src: url('./fonts/montserrat-light.woff');
  font-family: 'montserrat-regular';
  src: url('./fonts/montserrat-regular.woff');
}

body {
  margin: 0px;
  padding: 0px;
  background : grey;
}

* {
  box-sizing: border-box;
}

.navbar {
  position: absolute;
  top: 0;
  z-index: 2;
}

.map {
  margin-top: 8vh;
  z-index: 1;
}
</style>
