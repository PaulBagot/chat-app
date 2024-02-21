import { createRouter, createWebHistory } from 'vue-router'
import ChatView from '@/views/ChatView.vue'
import { supabase } from '@/supabase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chat',
      component: ChatView,
      meta : {
        requiresAuth : true
      }
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('@/views/AccountView.vue'),
      meta : {
        requiresAuth : true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignupView.vue')
    }
  ]
})

router.beforeEach(async(to, from, next) => {
  const { data }  = await supabase.auth.getSession()

  const isLogged = !!data.session
  const requiresAuth = to.matched.some((value) => value.meta.requiresAuth)

  if(requiresAuth && !isLogged) {
    next('/login')
  } else if (!requiresAuth && isLogged) {
    next('/')
  } else {
    next()
  }
})

export default router
