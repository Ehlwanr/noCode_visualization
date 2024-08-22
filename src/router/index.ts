import { createRouter, createWebHistory } from 'vue-router'

import AppView from '../views/AppView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'home',
      component: AppView,
      children: [
        {
          path: 'dataSource',
          name: 'dataSource',
          component: () => import('../views/DataSourceView.vue'),
          children: [
            {
              path: 'table',
              component: () => import('../views/DataSourceContent/TableContent.vue')
            },
            {
              path: ':id',
              component: () => import('../views/DataSourceContent/DataSourceContent.vue')
            },
            {
              path: '',
              redirect: '/app/dataSource/1'
            }
          ]
        },
        {
          path: 'layout',
          name: 'layout',
          component: () => import('../views/PageLayoutView.vue')
        },
        {
          path: 'actions',
          name: 'actions',
          component: () => import('../views/ActionsView.vue')
        }
      ]
    },
    {
      path: '/runner',
      name: 'runner',
      component: () => import('../views/RunnerView.vue')
    },
    {
      path: '/',
      redirect: '/app/layout'
    }
  ]
})

export default router
