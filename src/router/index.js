import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginView.vue'
import MemberPage from '../views/MemberView.vue'
import AdminView from '../views/AdminView.vue'

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
  // 관리자 
  {
    path: '/admin',
    name: 'AdminView',
    component: AdminView,
    meta: {
      manager: true
    }
  },
  {
    path: '/borad',
    name: 'BoardPage',
    component: () => import('../views/Community/BoardView.vue'),
  },
  {
    path: '/recipes',
    name: 'UserrecipePage',
    component: () => import('../views/Product/UserRecipeView.vue'),
    redirect: '/recipes',
    children: [
      {
        path: "/recipes",
        name: "communityList",
        component: () => import('../views/Community/CommunityList.vue')
      },
      {
        path: "/recipes/write",
        name: "communityWrite",
        component: () => import('../views/Community/CommunityWrite.vue')
      },
      {
        path: "/recipes/detail",
        name: "communityDetail",
        component: () => import('../views/Community/CommunityDetail.vue')
      },
      {
        path: "/recipes/modify",
        name: "communityModify",
        component: () => import('../views/Community/CommunityModify.vue')
      }
    ]
  },
  {
    path: '/products',
    name: 'product',
    component: () => import('../views/Product/ProductView.vue'),
  },
  {
    path: '/products/:id',
    name: 'productDetail',
    component: () => import('../views/Product/ProductDetail.vue')
  },
  {
    path: '/articles',
    name: 'article',
    component: () => import('../views/Community/ArticleView.vue'),
    redirect: '/articles',
    children: [
      {
        path: "/articles",
        name: "articleList",
        component: () => import('../views/Community/ArticleList.vue')
      },
      {
        path: "/articles/write",
        name: "articleWrite",
        component: () => import('../views/Community/ArticleWrite.vue')
      },
      {
        path: "/articles/detail",
        name: "articleDetail",
        component: () => import('../views/Community/ArticleDetail.vue')
      },
      {
        path: "/articles/modify",
        name: "articleModify",
        component: () => import('../views/Community/ArticleModify.vue')
      }
    ]
  },
  {
    path: '/events',
    name: 'event',
    component: () => import('../views/Community/EventView.vue'),
    redirect: '/events',
    children: [
      {
        path: "/events",
        name: "eventList",
        component: () => import('../views/Community/EventList.vue')
      },
      {
        path: "/events/write",
        name: "eventWrite",
        component: () => import('../views/Community/EventWrite.vue')
      },
      {
        path: "/events/detail",
        name: "eventDetail",
        component: () => import('../views/Community/EventDetail.vue')
      },
      {
        path: "/events/modify",
        name: "eventModify",
        component: () => import('../views/Community/EventModify.vue')
      }
    ]
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('../views/Community/CommunityView.vue'),
  },
  {
    path: "/cs",
    name: "cs",
    component: () => import('../views/Cs/CsView.vue'),
    redirect: '/notices',
    children: [
      {
        path: "/notices",
        name: "notice",
        component: () => import('../views/Cs/NoticeView.vue'),
        redirect: '/notices',
        children: [
          {
            path: "/notices",
            name: "noticeList",
            component: () => import('../views/Cs/NoticeList.vue')
          },
          {
            path: "/notices/write",
            name: "noticeWrite",
            component: () => import('../views/Cs/NoticeWrite.vue')
          },
          {
            path: "/notices/detail",
            name: "noticeDetail",
            component: () => import('../views/Cs/NoticeDetail.vue')
          },
          {
            path: "/notices/modify",
            name: "noticeModify",
            component: () => import('../views/Cs/NoticeModify.vue')
          }
        ]
      },
      {
        path: "/qna",
        name: "qna",
        component: () => import('../views/Cs/QnaView.vue'),
        redirect: '/qna',
        children: [
          {
            path: "/qna",
            name: "qnaList",
            component: () => import('../views/Cs/QnaList.vue')
          },
          {
            path: "/qna/write",
            name: "qnaWrite",
            component: () => import('../views/Cs/QnaWrite.vue')
          },
          {
            path: "/qna/detail",
            name: "qnaDetail",
            component: () => import('../views/Cs/QnaDetail.vue')
          },
          {
            path: "/qna/modify",
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

import store from "@/store"

router.beforeEach((to, from, next)=>{
  if(to.meta.manager && !store.state.chkManager){
    // console.log("접근 권한이 없습니다.")
    alert('접근 권한이 없습니다.');
    next('/');
    return;
  }
  next();
});

export default router
