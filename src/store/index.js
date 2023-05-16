import { createStore } from 'vuex'

export default createStore({
  state: {
    loginChk:false
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
    }
  },
})
