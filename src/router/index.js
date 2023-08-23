import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../views/Products.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import { auth } from '@/firebase'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/products/:id',
    name: 'productDetails',
    component: ProductDetails,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth.currentUser) {
    next("/")
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser)  {
    next("/login")
    return;
  }

  next()
})

export default router
