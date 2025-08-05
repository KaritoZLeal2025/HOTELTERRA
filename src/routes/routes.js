import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue' 
import HabitacionesPage from '../components/HabitacionesPage.vue'
import GastronomiaPage from '../components/GastronomiaPage.vue' 
import ServiciosPage from '../components/ServiciosPage.vue'
import DeportesPage from '../components/DeportesPage.vue'
import ImagenesGrid from "../components/ImagenesGrid.vue"
import Ventas from "../components/Ventas.vue"
import Productos from "../components/Productos.vue"


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
    

  {
    path: '/habitaciones',
    name: 'habitaciones',
    component: HabitacionesPage
  },
  {
    path: '/gastronomia', 
    name: 'gastronomia',
    component: GastronomiaPage
  },

   {
    path: '/servicios', 
    name: 'servicios',
    component: ServiciosPage
  },


   {
    path: '/deportes', 
    name: 'deportes',
    component: DeportesPage
  },
  {
    path: "/imagenes-grid",
    name: 'imagenes-grid',
    component: ImagenesGrid,
    props: {
      imagenes: [
        "https://i.pinimg.com/736x/94/a5/b1/94a5b1ddcd7b7b9401f4970851b26640.jpg",
        "https://i.pinimg.com/736x/54/c8/b8/54c8b813c3223ab9b5d267b839421e8a.jpg",
        "https://i.pinimg.com/736x/d5/7d/29/d57d29dc02400acdb5adf937b09b622f.jpg"
      ]
    }
  },
  { 
    path: "/ventas", 
    name: 'ventas',
    component: Ventas 
  },
  { 
    path: "/productos", 
    name: 'productos',
    component: Productos 
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})