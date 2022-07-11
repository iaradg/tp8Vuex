import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
        state: {
            url:'https://6286bd1ee9494df61b2cbd05.mockapi.io/tp2/usuarios/usuarios',
            usuarios:[],
		},
				actions:{
				//aca van las actions llamadas por los otros coponentes ej:
                /* ------------------- */
                /*     API REST: GET  */
                /* ------------------ */
                async getUsuarios({commit}){
                    try{
                        const{data}=await axios.get(this.state.url);
                    console.warn('actions -> getUsuarios')
                    commit('getUsuarios',data)
                    
                    }
                    catch(error){
                    console.error('error en getUsuarios', error.message)
                    }
                },
                async addUsuario({commit},user){
                    try {
                    await axios.post(this.state.url, user,{'content-type':'application/json'});
                    console.warn('actions -> addUsuario')
                    commit('addUsuario',user)  
                   } catch (error) {
                       alert(error.message)
                   }
                        
                    },    
                async   eliminarUsuarios({commit}){
                    try {
                        console.warn('actions -> eliminarUsuarios')
                        commit('eliminarUsuarios')  
                       } catch (error) {
                           alert(error.message)
                       }
                }
		},
				mutations:{
					//aca van las mutaciones, el metodo real que cambia las cosas
//en este caso la action llama a la mutation, ej:
          
            getUsuarios(state,data){
                console.warn('mutations -> getUsuarios')
                this.state.usuarios=data
            }, 
            addUsuario(state,data){
                console.warn('mutations -> addaUsuarios')
                this.state.usuarios.push(data)
            },
            eliminarUsuarios(){
                console.warn('mutations -> eliminarUsuarios')
                this.state.usuarios=[]
                
            },

		}
})