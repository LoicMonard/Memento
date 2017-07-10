<template>
  <div>
    <Navbar class="navbar"></Navbar>
    <Map class="map"></Map>
    <Items class="items"></Items>
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
  font-family: 'shorelines';
  src: url('./fonts/Shorelines Script Bold.otf');
}

body {
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  background : #Ffcccc;
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

.items {
  width: 100%;
}

@media screen and (min-width: 321px) {
  .map {
    width: 55%;
    height: 100vh;
    float: left;
  }

  .items {
    margin-top: 8vh;
    width: 45%;
    height: 100%;
    float: left;
  }
}
</style>
