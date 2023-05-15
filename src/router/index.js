import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
        name: "communitylist",
        component: () => import('../views/Community/CommunityList.vue')
      },
      {
        path: "/community/write",
        name: "communitywrite",
        component: () => import('../views/Community/CommunityWrite.vue')
      },
      {
        path: "/community/detail",
        name: "communitydetail",
        component: () => import('../views/Community/CommunityDetail.vue')
      },
      {
        path: "/community/modify",
        name: "communitymodify",
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
    path: "/cs",
    name: "notice",
    component: () => import('../views/Cs/NoticeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
