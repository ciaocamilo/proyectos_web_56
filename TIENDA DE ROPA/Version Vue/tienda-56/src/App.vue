<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <MiComponente/> -->
  <!-- <HelloWorld msg="Bienvenidos todos a Vue!!"/> -->
  <!-- <router-link to="/">Inicio</router-link>| -->
  <barra-menu/>
  <router-view/>
  <router-link :to="{name: 'PaginaPrueba'}">Página prueba</router-link>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MiComponente from './components/MiComponente.vue'
import BarraMenu from '@/components/Menu.vue'

export default {
  name: 'App',
  components: {
    BarraMenu
    // HelloWorld,
    // MiComponente
  }
}
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
