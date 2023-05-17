import { createStore } from 'vuex'

export default createStore({
  state: {
    loginChk: false,
    displayName:"",
    loginToken:null,
    noticeId:0,
    qnaId:0,
    communityId:0,
    uid:""
  },
  mutations: {
    loginToken(state,payload){
      state.loginToken = payload.refreshToken
      state.loginChk =true
      state.uid=payload.uid
    },
    logOutToken(state){
      state.loginChk = false,
      state.loginToken= null,
      state.displayName = "",
      state.uid = ''
      sessionStorage.removeItem("refreshToken")
      sessionStorage.removeItem("displayName")
    },
    NoticeDetail(state,payload){
      state.noticeId = payload
    },
    QnaDetail(state,payload){
      state.qnaId = payload
    },
    CommunityDetail(state,payload){
      state.communityId = payload
    },
  },
})
