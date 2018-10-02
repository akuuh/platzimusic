<!---------------------------------------------------------------------------
|	Al DOM detectar evento mouseup sobre el enlace, emite un evento hacia 	|
|	el padre llamado clicked, cuando el padre (App.vue) detecta el evento	|
|	clicked utiliza el metodo warning. 										|
---------------------------------------------------------------------------->
<template lang="pug">
 li.artist
 	h2: a(v-bind:href="artist.url" v-on:click="$emit('clicked')") {{artist.name}}
 	img(v-bind:src="artist.image[2]['#text']")
</template>

<script>
	export default {
	 	name: 'artist',
	 	props: ['artist']	 	
	}
</script>
<!---------------------------------------------------------------------------
|	scoped sirve para poner un data identificador al elemento html para  	|
|	limitar el alcance del css en el DOM 									|
---------------------------------------------------------------------------->
<style lang="stylus" scoped>
li.artist
	display inline-block
	margin 0 10px
</style>

