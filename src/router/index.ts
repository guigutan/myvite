import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/components/Layout/MainLayout.vue'
import SmomQuery from '@/views/SmomQuery.vue'
import RpaPrepayQuery from '@/views/RpaPrepayQuery.vue'
import RpaCodQuery from '@/views/RpaCodQuery.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '', redirect: '/smom' },           // 默认打开 SMOM
        { path: '/smom', component: SmomQuery, name: 'smom' },
        { path: '/rpa-prepay', component: RpaPrepayQuery, name: 'rpa-prepay' },
        { path: '/rpa-cod', component: RpaCodQuery, name: 'rpa-cod' },

       

      ]
    }
  ]
})

export default router