<template >

 <div class="jumbotron">
  <button class="btn btn-success my-3 mr-3" @click="getUsuarios()" > GET</button>
  <button class="btn btn-danger my-3 mr-3" @click="eliminarUsuarios()" > Borrar</button>

    <div  class="table-responsive" ></div>
       <table class="table table-dark"  >
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Email</th>
        </tr>
        <tr v-for="(usuario,index) in obtenerUsuarios" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.edad }}</td>
            <td>{{ usuario.email }}</td>
        </tr>
       </table>
  </div>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-tabla-personas',
    props: [],
    mounted () {

    },
    data () {
      return {
        
      }
    },
    methods: {
           getUsuarios(){
            
            this.$store.dispatch('getUsuarios')
           },
           eliminarUsuarios(){
            this.$store.dispatch('eliminarUsuarios')
           }
    
        },
    
    computed: {
         obtenerUsuarios(){  
        return this.$store.state.usuarios
      }
    }
}


</script>

<style scoped lang="css">
  .src-componentes-tabla-personas {


  }
  jumbotron{
    background-color:darkolivegreen ;
    color:rgb(231, 203, 168) ;
  }
</style>
