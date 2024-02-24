import { createStore } from 'vuex'

export default createStore({
  state: {
    userName: "Ivan Ivanov",
	userPhone: "88005553555",
	userEmail: "I@I.ru",
    userSf1: "Some info",
    userSf2: "Some info"
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
