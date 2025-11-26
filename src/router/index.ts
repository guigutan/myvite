import { createRouter, createWebHistory } from 'vue-router'

import codeKSMES from '@/views/codeKSMES.vue'
import codeSMOM from '@/views/codeSMOM.vue'
import ZF003 from '@/views/ZF003.vue'
import ZF004 from '@/views/ZF004.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: codeKSMES,
      children: [
        { path: '', redirect: '/codeKSMES' },           // 默认打开 codeKSMES
        { path: '/codeSMOM', component: codeSMOM, name: 'codeSMOM' },
        { path: '/ZF004', component: ZF004, name: 'ZF004' },
        { path: '/ZF003', component: ZF003, name: 'ZF003' },
        

       

      ]
    }
  ]
})

export default router