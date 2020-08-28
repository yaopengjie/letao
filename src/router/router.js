import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/components/home.vue'
import mycar from '@/components/mycar.vue'
import user from '@/components/user.vue'
import newslist from '@/components/news/newslist.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/mycar', component: mycar },
    { path: '/user', component: user },
    { path: '/newslist', component: newslist }

  ]
})

export default router
