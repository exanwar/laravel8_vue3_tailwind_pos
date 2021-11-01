import { createRouter, createWebHistory } from 'vue-router'

const BlankDash = import('../screens/App')
const Overview = import('../screens/overview/Overview')
const AccessManagement = import('../screens/access_management/AccessManagement')
const Plans = import('../screens/plans/Plans')
const Customers = import('../screens/customers/Customers')

const routes = [
    {
        path: '/developer',
        component: BlankDash,
        redirect: '/developer/overview',
        children: [
            {
                path: 'overview',
                name: 'dev_dash_overview',
                component: Overview
            },
            {
                path: 'user-management',
                name: 'dev_dash_user_management',
                component: AccessManagement
            },
            {
                path: 'plans',
                component: Plans,
                name: 'dev_dash_plans'
            },
            {
                path: 'customers',
                name: 'dev_dash_customers',
                component: Customers
            }
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
