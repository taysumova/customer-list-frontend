import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home'
import EditComponent from '@/components/customer/Edit'
import CreateComponent from '@/components/customer/Create'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          name: 'home',
          component: HomeComponent
      },
      {
          path: '/create',
          name: 'Create',
          component: CreateComponent
      },
      {
          path: '/edit/:id',
          name: 'Edit',
          component: EditComponent
      }
    ]
})