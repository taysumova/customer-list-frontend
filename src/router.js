import Vue from 'vue'
import Router from 'vue-router'
import CustomerListComponent from '@/views/CustomerList'
import EditComponent from '@/components/customer/Edit'
import CreateComponent from '@/components/customer/Create'
import ViewComponent from '@/components/customer/View'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
      {
        path: '/',
        name: 'CustomerList',
        component: CustomerListComponent
      },
      {
        path: '/create',
        name: 'Create',
        component: CreateComponent
      },
      {
        path: '/view/:id',
        name: 'View',
        component: ViewComponent
      },
      {
        path: '/edit/:id',
        name: 'Edit',
        component: EditComponent
      }
    ]
})