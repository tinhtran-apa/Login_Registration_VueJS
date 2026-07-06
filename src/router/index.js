import { createRouter, createWebHistory } from "vue-router"
import authRoutes from '../features/auth/router'

const router = createRouter({
    history: createWebHistory(),
    routes: [...authRoutes]
})

export default router