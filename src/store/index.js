import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  mutations: {
    loginToken(state,payload){
      state.loginToken = payload.refreshToken
      state.loginChk =true
      state.uid=payload.uid
    }
  },
})
