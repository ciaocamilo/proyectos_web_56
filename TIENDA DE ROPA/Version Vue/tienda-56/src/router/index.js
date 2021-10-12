import { createWebHistory, createRouter } from "vue-router"

import Home from "@/views/Home.vue"
import PaginaPrueba from "@/views/Prueba.vue"
import NotFound from "@/views/NotFound.vue"
import Clientes from "@/views/Clientes.vue"
import Productos from "@/views/Productos.vue"
import Carrito from "@/views/Carrito.vue"
import EditarCliente from "@/views/EditarCliente.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/pagina-prueba",
        name: "PaginaPrueba",
        component: PaginaPrueba
    },
    {
        path: "/clientes",
        name: "Clientes",
        component: Clientes
    },
    {
        path: "/clientes/editar",
        name: "EditarCliente",
        component: EditarCliente
    },
    {
        path: "/productos",
        name: "Productos",
        component: Productos
    },
    {
        path: "/carrito/:total",
        name: "Carrito",
        component: Carrito
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router