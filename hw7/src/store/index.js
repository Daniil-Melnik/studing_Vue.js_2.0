import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [ {id: 0, name: "Печенье", price: 15, img: "0.png"},
      {id: 1, name: "Каша", price: 39, img: "1.png"},
      {id: 2, name: "Ветчина", price: 61, img: "2.png"},
      {id: 4, name: "Электрогирлянда", price: 130, img: "4.png"},
      {id: 5, name: "Рабочая станция", price: 2896, img: "5.png"},
      {id: 8, name: "Малина", price: 2, img: "8.png"}],
    //cart: [],
    products: [
      {id: 0, name: "Печенье", price: 15, img: "0.png"},
      {id: 1, name: "Каша", price: 39, img: "1.png"},
      {id: 2, name: "Ветчина", price: 61, img: "2.png"},
      {id: 3, name: "Бургер", price: 50, img: "3.png"},
      {id: 4, name: "Электрогирлянда", price: 130, img: "4.png"},
      {id: 5, name: "Рабочая станция", price: 2896, img: "5.png"},
      {id: 6, name: "Гриб", price: 10, img: "6.png"},
      {id: 7, name: "Спички", price: 3, img: "7.png"},
      {id: 8, name: "Малина", price: 2, img: "8.png"},
      {id: 9, name: "Черника", price: 5, img: "9.png"}
    ],
    userData: {'name' : "", 'cardnum': "", 'emai': ""}
  }, 
  mutations: {
    upd(state, data){
      state.cart = data.cart
  },
  updUser(state, data){
    state.name = data.name
    state.cardnum = data.cardnum
    state.userEmail = data.email
}
},
})
