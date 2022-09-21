import { createRouter, createWebHashHistory } from 'vue-router'

const routes: any = [
    { path: '/', component: () => import('@/views/index.vue') },
    { path: '/main', component: () => import('@/views/main.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;