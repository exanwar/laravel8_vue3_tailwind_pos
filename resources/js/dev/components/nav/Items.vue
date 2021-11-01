<template>
    <item
        to="/developer/overview"
        routeName="dev_dash_overview"
        icon="fas fa-home"
        title="Overview"
        :navbarOpen="open"
        :navbarFocused="focused"
        v-show="$can('access_developer_dashboard')"
    />
    <item
        to="/developer/user-management"
        routeName="dev_dash_user_management"
        icon="fas fa-clipboard-list"
        title="User management"
        :navbarOpen="open"
        :navbarFocused="focused"
        v-show="$can('access_user_management')"
    />
    <item
        to="/developer/plans"
        routeName="dev_dash_plans"
        icon="fas fa-seedling"
        title="Plans"
        :navbarOpen="open"
        :navbarFocused="focused"
        v-show="$can('access_plans')"
    />
    <item
        to="/developer/customers"
        routeName="dev_dash_customers"
        icon="fas fa-users"
        title="Customers"
        :navbarOpen="open"
        :navbarFocused="focused"
        v-show="$can('access_company_customers')"
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
