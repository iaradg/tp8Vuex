<template>
  <div id="app">

    <div class="container fluid at -3">
      <div class="jumbotron">
        <h1>Tp 4 iara</h1>
         <NavBar></NavBar>

          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './componentes/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
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
