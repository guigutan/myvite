import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/views/Layout/MainLayout.vue'
import codeKSMES from '@/views/codeKSMES.vue'
import codeSMOM from '@/views/codeSMOM.vue'
import ZF003 from '@/views/ZF003.vue'
import ZF004 from '@/views/ZF004.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout,
       children: [
        { path: '', redirect: 'codeKSMES' }, // 重定向到子路由 codeKSMES
        { path: 'codeKSMES', component: codeKSMES, name: 'codeKSMES' }, // 新增子路由定义
        { path: 'codeSMOM', component: codeSMOM, name: 'codeSMOM' }, // 正确的子路由路径
        { path: 'ZF004', component: ZF004, name: 'ZF004' },
        { path: 'ZF003', component: ZF003, name: 'ZF003' },
     
      ]
    }
  ]
})

export default router