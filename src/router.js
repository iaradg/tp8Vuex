import Vue from 'vue'
import VueRouter from 'vue-router'


import TablaPersonasVuex from './componentes/TablaPersonasVuex.vue'
import Formulario from './componentes/Formulario.vue'

Vue.use(VueRouter)

export const router =new VueRouter({
    mode: 'history',
    routes : [
        {path: '/', redirect: '/binding'},
        {path: '/tabla-personas', component: TablaPersonasVuex},
        {path: '/formulario', component: Formulario},
         ]
})