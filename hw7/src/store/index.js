import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [ {id: 0, name: "Печенье", price: 15, img: "../assets/0.png"},
    {id: 1, name: "Каша", price: 39, img: "../assets/1.png"},
    {id: 2, name: "Ветчина", price: 61, img: "../assets/2.png"},
    {id: 4, name: "Электрогирлянда", price: 130, img: "../assets/4.png"},
    {id: 5, name: "Рабочая станция", price: 2896, img: "../assets/5.png"},
    {id: 8, name: "Малина", price: 2, img: "../assets/8.png"}],
    products: [
      {id: 0, name: "Печенье", price: 15, img: "../assets/0.png"},
      {id: 1, name: "Каша", price: 39, img: "../assets/1.png"},
      {id: 2, name: "Ветчина", price: 61, img: "../assets/2.png"},
      {id: 3, name: "Бургер", price: 50, img: "../assets/3.png"},
      {id: 4, name: "Электрогирлянда", price: 130, img: "../assets/4.png"},
      {id: 5, name: "Рабочая станция", price: 2896, img: "../assets/5.png"},
      {id: 6, name: "Гриб", price: 10, img: "../assets/6.png"},
      {id: 7, name: "Спички", price: 3, img: "../assets/7.png"},
      {id: 8, name: "Малина", price: 2, img: "../assets/8.png"},
      {id: 9, name: "Черника", price: 5, img: "../assets/9.png"}
    ]
  }, 
  mutations: {
    upd(state, cart){
      state.cart = cart
  }
},
})
