<template >

  <section class="src-componentes-api-rest-ful">
     <div class="jumbotron">
    <h2>Componente APiRestFul</h2>
    <hr>
    <hr>
    <br>    
  <!--   <pre>{{ usuarios}}</pre> -->

  <button class="btn btn-success mr2 mb-3" @click="getUsuarios">GET</button>
  <button class="btn btn-info mb-3" @click="postUsuario()">POST</button>

      <div class="media alert alert-success" v-for="(usuario,index) in usuarios" :key="index">
        <!-- // eslint-disable-next-line vue/no-parsing-error -->
        <img :src="usuario.foto" width="300" :alt="usuario.nombre">
        <div class="media-body ml-3">
            <h5 class="mt-0"><u>usuario {{ index + 1 }} - ID: {{usuario.id}} - creado: {{usuario.createdAt}}</u></h5>
            <br>
            <p>Nombre: {{ usuario.nombre }} </p>
            <p>Descripcion: <i>{{ usuario.descripcion }}</i></p>
            <p>Comentario: {{ usuario.comentario }}</p>
            <p>Direccion: <i>{{ usuario.direccion }}</i> - <b>{{usuario.coordenadas}}</b></p>
          
                        <button class="btn btn-warning ml-3" @click="putUsuario(usuario.id)">PUT</button> 
            <button class="btn btn-danger ml-3" @click="deleteUsuario(usuario.id)">DELETE</button> 

        </div>
    </div>

     </div>
  </section>

</template>

<script >

  export default  {
    name: 'src-componentes-api-rest-ful',
    props: [],
    mounted () {
       // this.getUsuarios()
    },
    data () {
      return {
        url: 'https://6286bd1ee9494df61b2cbd05.mockapi.io/tp2/usuarios/usuariosRestful/',
        usuarios: []
      }
    },
    methods: {
      /* ------------------- */
      /*     API REST: GET  */
      /* ------------------ */
      async getUsuarios(){
        try{
          let {data:usuarios} = await this.axios(this.url)
          console.log('AXIOS GET usuarios',usuarios)
          this.usuarios=usuarios
        }
        catch(error){
          console.error('error en getUsuarios', error.message)
        }
      },

      /* ------------------- */
      /*     API REST: POST  */
      /* ------------------ */
      async  postUsuario(){
        
        let usuarioNew ={
          "createdAt": "2022-06-28T23:10:59.014Z",
          "nombre": "Iara ",
          "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-1024.png",
          "descripcion": "dale iara mierda carajo que aprobas",
          "coordenadas": [
            "-89.8412",
            "-45.4408"
            ],
          "comentario": "Up-sized scalable knowledge user",
          "direccion": "7018 Eric Hill",
          "id": "1"
        }
        console.log(usuarioNew)
        try{
          let {data:usuario} = await this.axios.post(this.url,usuarioNew,{'content-type': 'application/json'})
          console.log('AXIOS POST usuario',usuario)

          //this.getUsuarios()
          this.usuarios.push(usuario)

          //una ves hecho esto, el nuevo usuario ya es parte del mockapi, esta en la nube
        }
        catch(error){
          console.error('error en postUsuarios', error.message)
        }
      },
      /* ------------------- */
      /*     API REST: PUT  */
      /* ------------------ */

      async  putUsuario(id){
        let usuarioUpdate ={
          "createdAt": "2022-06-28T23:10:59.014Z",
          "nombre": "Maria ",
          "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-1024.png",
          "descripcion": "dale iara mierda carajo que aprobas",
          "coordenadas": [
            "-89.8412",
            "-45.4408"
            ],
          "comentario": "Up-sized scalable knowledge user",
          "direccion": "7018 Eric Hill",
          "id": id,
        }
            console.log(usuarioUpdate)
            try{
          let {data:usuario} = await this.axios.put(this.url+id,usuarioUpdate,{'content-type': 'application/json'})
          console.log('AXIOS PUT usuario',usuario)

          let index =this.usuarios.findIndex(user=> user.id== usuario.id) 

          if(index==-1) throw new Error('Usuario no encontrado')         
          
          this.usuarios.splice(index,1,usuario)

          //una ves hecho esto, el nuevo usuario ya es parte del mockapi, esta en la nube
        }
        catch(error){
          console.error('error en putUsuarios', error.message)
        }
      },

      /* ------------------- */
      /*     API REST: DELETE  */
      /* ------------------ */
      async deleteUsuario(id){
        console.log('deleteUsuario',id)

         try{
          let {data:usuario} = await this.axios.delete(this.url+id)
          console.log('AXIOS DELETE usuario',usuario)

          let index =this.usuarios.findIndex(user=> user.id== usuario.id) 

          if(index==-1) throw new Error('Usuario no encontrado')         
          
          this.usuarios.splice(index,1)

          //una ves hecho esto, el nuevo usuario ya es parte del mockapi, esta en la nube
        }
        catch(error){
          console.error('error en deleteUsuarios', error.message)
        }
      },
    },

    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-api-rest-ful {

  }
  .jumbotron{
    background-color: rgb(79, 46, 5);
    color: darkolivegreen;
  }

  hr{
    background-color: rgb(136, 123, 108);
  }
  pre{
    color: white;
  }
</style>
