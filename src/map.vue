<template>
  <div class="map">
    <!--<input id="searchTextField" type="text">
    <button @click="addMarker()">Get loc details</button>
    <button @click="getLocPhoto()">Get loc photo</button> {{address}}
    <img v-bind:src="this.response">-->
    <div id="myMap"></div>
    <!--<li v-for="marker in markers">
      - <span class="message">{{marker.address}}</span><br>
      at lat : <span class="author">{{marker.latitude}}</span>
      at lng : <span class="date">{{marker.longitude}}</span>
    </li>-->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'map',
  data () {
    return {
      address: '',
      response: '',
      markers: '',
      infoWindows: []
    }
  },
  methods: {
    ...mapActions(['sendItems'])
  },
  mounted: function() {
    //MAP INIT
    this.map = new google.maps.Map(document.getElementById('myMap'), {
      center: {lat:48.709444, lng: 2.492176},
      scrollwheel: true,
      zoom: 14
    })

    var infoWindow = new google.maps.InfoWindow;

    this.$http.get('https://api.myjson.com/bins/h6utj').then(response => {
      this.markers = response.body;
      this.sendItems(this.markers);
      
      Array.prototype.forEach.call(this.markers, (marker) => {
        var id = marker.id;
        var title = marker.title;
        var address = marker.address;
        var point = new google.maps.LatLng(
          parseFloat(marker.latitude),
          parseFloat(marker.longitude)
        );

        var infowincontent = document.createElement('div');
        var strong = document.createElement('strong');
        strong.textContent = title;
        infowincontent.appendChild(strong);
        infowincontent.appendChild(document.createElement('br'));
        var text = document.createElement('text');
        text.textContent = address
        infowincontent.appendChild(text);

        var marker = new google.maps.Marker({
          position: point,
          map: this.map
        });

        marker.addListener('click', function() {
          infoWindow.setContent(infowincontent);
          infoWindow.open(this.map, marker);
        });

        marker.addListener('dblclick', function() {
          this.map.panTo(this.getPosition());
          this.map.setZoom(14);
        });

        this.map.addListener('click', function() {
          infoWindow.close();
        });

        // console.log("Id : "+id+", title : "+ title + ", address : "+address+", point : "+point);
      });
      
    }, (response) => {
      console.log('erreur');
    });
  }
}
</script>

<style lang="less" src="./styles/map.less">
</style>
