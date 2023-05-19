import { createStore } from 'vuex'

export default createStore({
  state: {
    loginChk: false,
    displayName: "",
    loginToken: null,
    noticeId: 0,
    qnaId: 0,
    communityId: 0,
    uid: "",
    navSelectIndex : 0
  },
  mutations: {
    NavSelectClick(state, payload){
      state.navSelectIndex = payload
    },
    loginToken(state, payload) {
      state.loginToken = payload.refreshToken
      state.loginChk = true
      state.uid = payload.uid
    },
    logOutToken(state) {
      state.loginChk = false,
        state.loginToken = null,
        state.displayName = "",
        state.uid = ''
      localStorage.removeItem("refreshToken")
      localStorage.removeItem("displayName")
    },
    loginState(state, payload) {
      state.loginToken = sessionStorage.getItem("refreshToken") || sessionStorage.getItem("Token")
      state.displayName = payload.displayName
      state.uid = payload.uid
      state.loginChk = true
    },
    NoticeDetail(state, payload) {
      state.noticeId = payload
    },
    QnaDetail(state, payload) {
      state.qnaId = payload
    },
    CommunityDetail(state, payload) {
      state.communityId = payload
    },
  },
  actions: {

  }
})
