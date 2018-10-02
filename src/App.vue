<template lang="pug">
 #app
    img(src='https://akuuh.github.io/platzimusic/dist/logo.png')
    h1 {{ msg }}
    select(v-model="selectedCountry")
      option(v-for='country in contries' v-bind:value="country.value") {{country.name}}
    spinner(v-show="loading")
    ul
      artist(v-for='artist in artists' v-bind:artist="artist" v-on:clicked="warning" v-bind:key="artist.mbid") {{ artist.name }}  
</template>

<script>
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'
import getArtists from './api'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Platzi Music',
      artists: [],
      contries: [
        {name: 'Republica Dominicana', value: 'dominican+republic'},
        {name: 'Puerto Rico', value: 'Puerto+Rico'},
        {name: 'Argentina', value: 'argentina'}
      ],
      selectedCountry: 'dominican+republic',
      loading: true
    }
  },
  components:{
    Artist,
    Spinner
  }, 
  methods:{
    warning: function() {
      alert('Esta saliendo de PlatziMusic')
    },
    refreshArtists() {
      const self = this
      this.loading = true
      this.artists = []
      getArtists(this.selectedCountry)
        .then(function (artists) {
          self.loading = false
          self.artists = artists
        })
    }
  },
  mounted() {
    this.refreshArtists()
  },
  //watch espera un cambio en la variable definida y ejecuta el codigo.
  watch: {
    selectedCountry(){
      this.refreshArtists()    
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

h1, h2
  font-weight normal
  
ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
