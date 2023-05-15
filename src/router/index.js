import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginView.vue'
import MemberPage from '../views/MemberView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'loginPage',
    component: LoginPage
  },
  {
    path: '/member',
    name: 'MemberPage',
    component: MemberPage
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product/ProductView.vue')
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('../views/Community/CommunityView.vue'),
    redirect: '/community/list',
    children: [
      {
        path: "/community/list",
        name: "list",
        component: () => import('../views/Community/CommunityList.vue')
      },
      {
        path: "/community/write",
        name: "write",
        component: () => import('../views/Community/CommunityWrite.vue')
      },
      {
        path: "/community/detail",
        name: "detail",
        component: () => import('../views/Community/CommunityDetail.vue')
      },
      {
        path: "/community/modify",
        name: "modify",
        component: () => import('../views/Community/CommunityModify.vue')
      }
    ]
  },
  {
    path: "/cs",
    name: "cs",
    component: () => import('../views/Cs/CsView.vue')
  },
  {
    path: "/notice",
    name: "notice",
    component: () => import('../views/Cs/NoticeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
