import { createRouter, createWebHistory } from 'vue-router'

const BlankDash = import('../screens/App')
const Overview = import('../screens/overview/Overview')
const AccessManagement = import('../screens/access_management/AccessManagement')
const Products = import('../screens/products/Products')
const Vendors = import('../screens/vendors/Vendors')
const Purchase = import('../screens/purchase/Purchase')
const Customers = import('../screens/customers/Customers')
const POS = import('../screens/pos/POS')
const Sells = import('../screens/sells/Sells')
const Settings = import('../screens/settings/Settings')


const routes = [
    {
        path: '/admin',
        component: BlankDash,
        redirect: '/admin/overview',
        children: [
            {
                path: 'overview',
                name: 'dev_dash_overview',
                component: Overview
            },
            {
                path: 'user-management',
                name: 'admin_dash_user_management',
                component: AccessManagement
            },
            {
                path: 'products',
                component: Products,
                name: 'admin_dash_products'
            },
            {
                path: 'vendors',
                name: 'admin_dash_vendors',
                component: Vendors
            },
            {
                path: 'purchase',
                name: 'admin_dash_purchase',
                component: Purchase
            },
            {
                path: 'customers',
                name: 'admin_dash_customers',
                component: Customers
            },
            {
                path: 'pos',
                name: 'admin_dash_pos',
                component: POS
            },
            {
                path: 'sells',
                name: 'admin_dash_sells',
                component: Sells
            },
            {
                path: 'settings',
                name: 'admin_dash_settings',
                component: Settings
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
