<template>
  <div class="items">
    <div id="item" v-for="item in items">
      <img :src="'https://maps.googleapis.com/maps/api/streetview?size=300x400&location='+item.address+'&fov=120&heading=0&pitch=10&key=AIzaSyCUEEzTpu8BzuQ2te4yY0gBzvQ6ax7w_wA'">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'items',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([])
  },
  computed: {
    ...mapGetters(['items'])
  }
}
</script>

<style lang="less" src="./styles/items.less">
</style>
