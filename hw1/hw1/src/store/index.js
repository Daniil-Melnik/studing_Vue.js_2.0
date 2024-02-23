import { createStore } from 'vuex'

export default createStore({
  state: {
    userName: "qq",
	userPhone: "",
	userEmail: "",
    userSf1: "",
    userSf2: ""
  }, 
  mutations: {
    upd(state, data){
        state.userName = data.name
        state.userPhone = data.phone
        state.userEmail = data.email
        state.userSf1 = data.sf1
        state.userSf2 = data.sf2
    }
},
})
