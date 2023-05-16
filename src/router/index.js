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
        name: "communityList",
        component: () => import('../views/Community/CommunityList.vue')
      },
      {
        path: "/community/write",
        name: "communityWrite",
        component: () => import('../views/Community/CommunityWrite.vue')
      },
      {
        path: "/community/detail",
        name: "communityDetail",
        component: () => import('../views/Community/CommunityDetail.vue')
      },
      {
        path: "/community/modify",
        name: "communityModify",
        component: () => import('../views/Community/CommunityModify.vue')
      }
    ]
  },
  {
    path: "/cs",
    name: "cs",
    component: () => import('../views/Cs/CsView.vue'),
    redirect: '/cs/notice',
    children: [
      {
        path: "/cs/notice",
        name: "notice",
        component: () => import('../views/Cs/NoticeView.vue'),
        redirect: '/cs/notice/list',
        children: [
          {
            path: "/cs/notice/list",
            name: "noticeList",
            component: () => import('../views/Cs/NoticeList.vue')
          },
          {
            path: "/cs/notice/write",
            name: "noticeWrite",
            component: () => import('../views/Cs/NoticeWrite.vue')
          },
          {
            path: "/cs/notice/detail",
            name: "noticeDetail",
            component: () => import('../views/Cs/NoticeDetail.vue')
          },
          {
            path: "/cs/notice/modify",
            name: "noticeModify",
            component: () => import('../views/Cs/NoticeModify.vue')
          }
        ]
      },
      {
        path: "/cs/qna",
        name: "qna",
        component: () => import('../views/Cs/QnaView.vue'),
        redirect: '/cs/qna/list',
        children: [
          {
            path: "/cs/qna/list",
            name: "qnaList",
            component: () => import('../views/Cs/QnaList.vue')
          },
          {
            path: "/cs/qna/write",
            name: "qnaWrite",
            component: () => import('../views/Cs/QnaWrite.vue')
          },
          {
            path: "/cs/qna/detail",
            name: "qnaDetail",
            component: () => import('../views/Cs/QnaDetail.vue')
          },
          {
            path: "/cs/qna/modify",
            name: "qnaModify",
            component: () => import('../views/Cs/QnaModify.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
