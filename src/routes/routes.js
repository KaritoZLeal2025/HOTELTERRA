import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import HabitacionesPage from '../components/HabitacionesPage.vue'
import GastronomiaPage from '../components/GastronomiaPage.vue' 
import DeportesPage from '../components/DeportesPage.vue'
import DeportesGrid from '../components/DeportesGrid.vue'
import DeportesHero from '../components/DeportesHero.vue'
import DeporteDetalle from '../components/DeporteDetalle.vue'
import ServiciosPage from '../components/ServiciosPage.vue'
import ServicioCard from '../components/ServicioCard.vue'
import ServiciosGrid from '../components/ServiciosGrid.vue'
import ServicioDetalle from '../components/ServicioDetalle.vue'
import ServiciosAdicionales from '../components/ServiciosAdicionales.vue'
import ImagenesGrid from '../components/ImagenesGrid.vue'
import Ventas from '../components/Ventas.vue'
import Productos from '../components/Productos.vue'

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
    path: '/deportes',
    name: 'deportes',
    component: DeportesPage
  },
  {
    path: '/deportes/grid',
    name: 'deportes-grid',
    component: DeportesGrid
  },
  {
    path: '/deportes/hero',
    name: 'deportes-hero',
    component: DeportesHero
  },
  {
    path: '/deportes/:id',
    name: 'deporte-detalle',
    component: DeporteDetalle,
    props: true
  },

  {
  path: '/servicios',
  name: 'Servicios',
  component: ServiciosPage
},
  {
    path: '/servicios/grid',
    name: 'servicios-grid',
    component: ServiciosGrid
  },
  {
    path: '/servicio/card',
    name: 'servicio-card',
    component: ServicioCard
  },
    {
    path: '/servicios/:id',
    name: 'servicio-detalle',
    component: ServicioDetalle,
    props: true
  },
  {
    path: '/servicios/adicionales',
    name: 'servicios-adicionales',
    component: ServiciosAdicionales,
  },
  {
    path: '/imagenes-grid',
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
    path: '/ventas',
    name: 'ventas',
    component: Ventas
  },
  {
    path: '/productos',
    name: 'productos',
    component: Productos
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
