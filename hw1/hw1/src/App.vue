<template>
  <div>
    <div class="wrapper">
      <div class="sample">
    <div :class="[clName1]">
      <form>
        <div class="progress-n">
          <div class="progress-bar-n"> <!-- class all width of progress bar (grey + blue) -->
            <div :class="[progressNo]"></div> <!-- class for changig width of progress-bar (only blue) -->
          </div>
        </div>
        <div>
          <!-- using of cinput componrnt with cycle
             @senddata = "receiveData" - special method for emission
            senddata - name in component (contains emit)
            receiveData - method of main vue for changing main data-->
          <cinput v-for="(el, i) in info" :key="i"
              :maintext="el.text"
              :indtxt="el.indtext"
              :reg="el.reg"
              @senddata = "receiveData"></cinput>
        </div>
      </form>
      <button class="btn-primary" v-on:click="chngClName">
        Send Data
      </button>
    </div>
    <div :class = "[clName2]">
      <table class="table-bordered">
        <tr>
          <th>Name</th>
          <td>{{ userData['name'] }}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>{{ userData['phone'] }}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{{ userData['email'] }}</td>
        </tr>
        <tr>
          <th>Some Field 1</th>
          <td>{{ userData['sf1'] }}</td>
        </tr>
        <tr>
          <th>Some Field 2</th>
          <td>{{ userData['sf2'] }}</td>
        </tr>
      </table>
    </div>
    <!-- <button class="btn btn-primary" :disabled='isBarBlocked' v-on:click="chngClName"> -->
  </div>
  </div>
  </div>
</template>

<script>
import cinput from './components/cinput.vue'

export default {
  name: 'App',

  data(){
    return{
      userData: {'name': this.$store.state.userName,
                'phone': this.$store.state.userPhone,
                'email': this.$store.state.userEmail,
                'sf1': this.$store.state.userSf1,
                'sf2': this.$store.state.userSf2},
				isBarBlocked: true,
				pg: true,
				clName1 : "main_pg_active",
				clName2 : "pg_passive",
				progressNo: "progressNo_0",
				spn: 0,
				isContact: {'name' : false, 'phone' : false, 'sf1' : false, 'sf2' : false, 'email' : false},
				info : [
					{
						text: "Name",            //title of input
						indtext: "name",         //identifier of input
						reg: /^[a-zA-Z ]{2,30}$/,//regexp to control correctness of input value
					},
					{
						text: "Phone",
						indtext: "phone",
						reg: /^[0-9]{7,14}$/,
					},
					{
						text: "Email",
						indtext: "email",
						reg: /.+/,
					},
					{
						text: "Some Field 1",
						indtext: "sf1",
						reg: /.+/,
					},
					{
						text: "Some Field 2",
						indtext: "sf2",
						reg: /.+/,
					},
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
					this.isContact['phone'] ? this.spn += 1 : this.spn += 0
					this.isContact['sf1'] ? this.spn += 1 : this.spn += 0
					this.isContact['email'] ? this.spn += 1 : this.spn += 0
					this.isContact['sf2'] ? this.spn += 1 : this.spn += 0
				},
				receiveData(ist, s, str){ // ~ this.indtxt , this.isContact, this.text from $emit from sendPack
					this.isContact[ist] = s // changing main isContact array
					this.userData[ist] = str // changing main userData
					this.findNumOfTrue() // controls for progress-bar
					this.chngFieldsNo()
          this.$store.commit('upd', this.userData);
					this.spn === 5 ? this.isBarBlocked = false : this.isBarBlocked = true // control of blocking of bar
				},
				chngClName(){
					this.clName1 = "main_pg_passive"
					this.clName2 = "pg_active"
				}
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
	background-color: rgb(53, 122, 181);
	transition: 0.3s;
}

.progressNo_1{
	width: 20%;
	height: 20px;
	border-radius: 4px;
	background-color: rgb(53, 122, 181);
	transition: 0.3s;
}

.progressNo_2{
	width: 40%;
	height: 20px;
	border-radius: 4px;
	background-color: rgb(53, 122, 181);
	transition: 0.3s;
}

.progressNo_3{
	width: 60%;
	height: 20px;
	border-radius: 4px;
	background-color: rgb(53, 122, 181);
	transition: 0.3s;
}

.progressNo_4{
	width: 80%;
	height: 20px;
	border-radius: 4px;
	background-color: rgb(53, 122, 181);
	transition: 0.3s;
}

.progressNo_5{
	width: 100%;
	height: 20px;
	border-radius: 4px;
	background-color: rgb(53, 122, 181);
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
</style>
