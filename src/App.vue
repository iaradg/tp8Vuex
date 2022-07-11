<template>
  <div id="app">

    <div class="container fluid at -3">
      <div class="jumbotron">
        <h1>Tp 8 iara</h1>
         <NavBar></NavBar>

          <router-view></router-view>
          <tabla-personas-vuex />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './componentes/NavBar.vue'
import TablaPersonasVuex from './componentes/TablaPersonasVuex.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    TablaPersonasVuex,
  }
}
</script>

<style scoped lang="css">
  .src-componentes-binding {

  }
  .jumbotron{
    background-color: bisque;
    color: darkolivegreen;
  }

  hr{
    background-color: rgb(136, 123, 108);
  }
</style>
