<template>
    <div>
      <div class="wrapper">
        <div class="sample">
      <div v-if="dataPg">
        <h3>Заполните Ваши данные:</h3>
        <form>
          <div class="progress-n">
            <div class="progress-bar-n">
              <div :class="[progressNo]"></div>
            </div>
          </div>
          <div>
            <cinput v-for="(el, i) in info" :key="i"
                :maintext="el.text"
                :indtxt="el.indtext"
                :reg="el.reg"
                @senddata = "receiveData"></cinput>
          </div>
        </form>
        <button class="btn-primary" :disabled="isBarBlocked" v-on:click="dataPg = !dataPg">
          Отправить
        </button>
      </div>
      <div v-else>
        <p class="sended">Заказ оформлен</p>
      </div>
    </div>
    </div>
    </div>
  </template>
  
  <script>
  import cinput from './cinput.vue'
  
  export default {
    name: 'App',
  
    data(){
      return{
        userData: {'name': this.$store.state.userData.name,
                  'cardnum': this.$store.state.userData.cardnum,
                  'email': this.$store.state.userData.email},
                  isBarBlocked: true,
                  clName1 : "main_pg_active",
                  clName2 : "pg_passive",
                  progressNo: "progressNo_0",
                  spn: 0,
                  dataPg : true,
                  isContact: {'name' : false, 'cardnum' : false, 'email' : false},
                  info : [
                      {
                          text: "Имя, Фамилия",           
                          indtext: "name",         
                          reg: /.+/,
                      },
                      {
                          text: "Номер карты",
                          indtext: "cardnum",
                          reg: /.+/,
                      },
                      {
                          text: "Эл. почта",
                          indtext: "email",
                          reg: /.+/,
                      }
                  ]
      }
    },
  
    methods: {
                  chngFieldsNo(){ //class-computing for progress bar
                      this.progressNo = "progressNo_"
                      this.progressNo = this.progressNo + this.spn
                  },
                  findNumOfTrue(){ //counting of correct inputs for progress-bar
                      this.spn = 0
                      this.isContact['name'] ? this.spn += 1 : this.spn += 0
                      this.isContact['cardnum'] ? this.spn += 1 : this.spn += 0
                      this.isContact['email'] ? this.spn += 1 : this.spn += 0
                  },
                  receiveData(ist, s, str){ // ~ this.indtxt , this.isContact, this.text from $emit from sendPack
                      this.isContact[ist] = s // changing main isContact array
                      this.userData[ist] = str // changing main userData
                      this.findNumOfTrue() // controls for progress-bar
                      this.chngFieldsNo()
                      this.$store.commit('updUser', this.userData);
                      this.spn === 3 ? this.isBarBlocked = false : this.isBarBlocked = true // control of blocking of bar
                      console.log('stored: ', this.$store.state.userData)
                  },
                  chngClName(){
                      this.clName1 = "main_pg_passive"
                      this.clName2 = "pg_active"
                  },
              },
  
    components: {
      cinput
    }
  }
  </script>
  
  <style>
  .wrapper{
      padding: 15px;
      max-width: 500px;
      margin: 0 auto;
  }
  
  .progress-n {
      height: 20px;
      margin-bottom: 20px;
      overflow: hidden;
      background-color: #f5f5f5;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
      box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
  }
  
  .progress-bar-n {
      transition: 0.3s;
  }
  
  .progressNo_0{
      width: 0%;
      height: 20px;
      border-radius: 4px;
      background-color: rgb(0, 41, 145);
      transition: 0.3s;
  }
  
  .progressNo_1{
      width: 33%;
      height: 20px;
      border-radius: 4px;
      background-color: rgb(0, 41, 145);
      transition: 0.3s;
  }
  
  .progressNo_2{
      width: 66%;
      height: 20px;
      border-radius: 4px;
      background-color: rgb(0, 41, 145);
      transition: 0.3s;
  }
  
  .progressNo_3{
      width: 100%;
      height: 20px;
      border-radius: 4px;
      background-color: rgb(0, 41, 145);
      transition: 0.3s;
  }
  
  .main_pg_active {
      opacity: 1;
      z-index: 1;
    }
  
    .main_pg_passive {
      opacity: 0;
      height: 0;
      z-index: -1;
    }
  
    .pg_active {
      margin-top: 0;
      opacity: 1;
      transition: 0.5s;
      z-index: 5;
    }
  
    .pg_passive {
      margin-top: 500px;
      margin-left: 300px;
      opacity: 0;
      transition:0.5s;
      height: 0;
      z-index: -5;
    }
  
    .btn-primary {
      width: 80px;
      height: 40px;
      background-color: rgb(0, 0, 92);
      color: aliceblue;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      border: none;
      border-radius: 8px;
      margin-top: 5px;
      transition: 0.6s;
    }

    .btn-primary:hover {
      background-color: aliceblue;
      color: rgb(0, 0, 92);
      transform: scale(1.2);
    }
  
    .table-bordered{
      border: 0px;
      border-collapse: collapse;
      width: 500px;
      height: 300px;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
  
    .table-bordered td{
      border: 1px solid silver;
      border-radius: 5px;
    }
  
    .table-bordered th{
      border: 1px solid silver;
      border-radius: 5px;
    }

    h3 {
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      font-size: 20px;
      color: rgb(0, 17, 61);
      text-align: center;
    }

    .sended {
      text-align: center;
      color: rgb(0, 0, 92);
      font-size: 30px;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
  </style>