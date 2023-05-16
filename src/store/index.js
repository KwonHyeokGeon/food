import { createStore } from 'vuex'

export default createStore({
  state: {
    loginChk: false,
    displayName:"",
    loginToken:null,
    noticeId:0,
    qnaId:0,
    uid:""
  },
  mutations: {
    loginToken(state,payload){
      state.loginToken = payload.refreshToken
      state.loginChk =true
      state.uid=payload.uid
    },
    NoticeDetail(state,payload){
      state.noticeId = payload
    },
    QnaDetail(state,payload){
      state.qnaId = payload
    },
  },
})
