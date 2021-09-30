import { createWebHistory, createRouter } from "vue-router"

import Home from "@/views/Home.vue"
import PaginaPrueba from "@/views/Prueba.vue"
import NotFound from "@/views/NotFound.vue"

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
        path: "/:catchAll(.*)",
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router