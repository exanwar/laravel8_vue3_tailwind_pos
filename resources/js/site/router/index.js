import { createRouter, createWebHistory } from 'vue-router'
const Plans = import("../screens/Plans");


import Test from '../Test'
const routes = [
    {
        path: '/',
        name: 'Plans',
        component: Plans
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
