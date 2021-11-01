<template>
    <item
        to="/admin/overview"
        routeName="dev_dash_overview"
        icon="fas fa-home"
        title="Overview"
        :navbarOpen="open"
        :navbarFocused="focused"
        v-show="$can('access_admin__dashboard')"
    />
    <item
        to="/admin/user-management"
        routeName="admin_dash_user_management"
        icon="fas fa-clipboard-list"
        title="User management"
        :navbarOpen="open"
        :navbarFocused="focused"
        v-show="$can('access_user_management')"
    />
    <item
        to="/admin/products"
        routeName="admin_dash_products"
        icon="fas fa-box-open"
        title="Products"
        :navbarOpen="open"
        :navbarFocused="focused"
        v-show="$can('access_products')"
    />
    <item
        to="/admin/vendors"
        routeName="admin_dash_vendors"
        icon="fas fa-parachute-box"
        title="Vendors"
        :navbarOpen="open"
        :navbarFocused="focused"
        v-show="$can('access_vendors')"
    />
    <item
        to="/admin/purchase"
        routeName="admin_dash_purchase"
        icon="fas fa-people-carry"
        title="Purchase"
        :navbarOpen="open"
        :navbarFocused="focused"
        v-show="$can('access_purchases')"
    />
    <item
        to="/admin/customers"
        routeName="admin_dash_customers"
        icon="fas fa-users"
        title="Customers"
        :navbarOpen="open"
        :navbarFocused="focused"
        v-show="$can('access_customers')"
    />
    <item
        to="/admin/pos"
        routeName="admin_dash_pos"
        icon="fas fa-shopping-cart"
        title="POS"
        :navbarOpen="open"
        :navbarFocused="focused"
        v-show="$can('access_pos')"
    />
    <item
        to="/admin/sells"
        routeName="admin_dash_sells"
        icon="fas fa-inbox"
        title="Sells"
        :navbarOpen="open"
        :navbarFocused="focused"
        v-show="$can('access_sells')"
    />
    <item
        to="/admin/settings"
        routeName="admin_dash_settings"
        icon="fas fa-cog"
        title="Settings"
        :navbarOpen="open"
        :navbarFocused="focused"
        v-show="$can('access_sells')"
    />
</template>

<script>
import Item from './Item.vue'
export default {
    props: ['open', 'focused'],
    components: { Item },
    setup() {
        return {}
    },
}
</script>

<style lang="scss" scoped></style>
