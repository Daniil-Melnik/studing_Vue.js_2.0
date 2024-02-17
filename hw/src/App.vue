<template>
    <div class="main">
        <div v-if="pg" class="pg1">
            <div  v-for="q in questions">
                <A v-if="q.id === qn"
                        :answers="q.answers"
                        :title="q.title"
                        :type="q.type"
                        :qw_name="q.id"
                        :qid="q.id"
                        :checked="gAnswers[q.id]"
                        @senddata = "receiveData">
                    </A>
            </div>
            <div class="buttons">
                <button v-on:click="qn != 1 ? qn = qn - 1 : qn = qn" class="left"></button>
                <button v-if="qn != 10" v-on:click="qn != 10 ? qn = qn + 1 : qn = qn" class="right"></button>
                <button v-else v-on:click="pg = !pg" class="send"></button>
            </div>
        </div>
        <div v-else>
            <F 
            :questions="questions"
            :ganswers="gAnswers">
        </F>
        <button v-if="qn === 10" v-on:click="pg = !pg" class="return"></button>
        </div>
    </div>
</template>

<script>
import A from "./components/Question"
import F from "./components/Finish"
import json from './recources/data1.json'
export default {
    data(){
        return{
            questions: json,
            qn : 1,
            gAnswers: { 1 : [""], 2 : [""], 3 : [""], 4 : [""], 5 : [""], 6 : [""], 7 : [""], 8 : [""], 9 : [""], 10 : [""]},
            pg : true
        }
    },
    methods: {
        receiveData(i, arr, s){
            if ((arr == [] && s === "") || (arr != [] && s === "")){
                this.gAnswers[i] = arr
            }
            else {
                this.gAnswers[i].splice(0, this.gAnswers[i].length);
                this.gAnswers[i].push(s)
            }
        },
    },
    components: {
		A,
        F
	}
}
</script>

<style>
    .main{
        background: rgb(255, 255, 255);
        color: #100061;
        height: 100vh;
        font-family: "Lucida Console";
        font-size: 20px;
    }
    .right {
        
        width: 45px;
        height: 45px;
        border: none;
        background-color:rgba(255, 255, 255, 0);
        background-image: url('./assets/right.png');
        background-size: cover;
        border-radius: 50%;
        transition: 0.5s;
  
    }

    .left {
        width: 45px;
        height: 45px;
        border: none;
        background-color:rgba(255, 255, 255, 0);
        background-image: url('./recources/left.png');
        background-size: cover;
        border-radius: 50%;
        transition: 0.5s;
    }

    .left:hover {
        margin-left: -8px;
        margin-right: 8px;
        transform: scale(1.2);
    }

    .right:hover {
        margin-right: -8px;
        margin-left: 8px;
        transform: scale(1.2);
    }

    .send {
        width: 45px;
        height: 45px;
        border: none;
        background-color:rgba(255, 255, 255, 0);
        background-image: url('./assets/send.png');
        background-size: cover;
        border-radius: 50%;
        transition: 0.5s;
    }

    .send:hover {
        transform: scale(1.2);
    }

    .buttons{
        text-align: center;
    }

    .container {
        width: 50%;
    }
    
    .return{
        width: 48px;
        height: 48px;
        border: none;
        background-color:rgba(255, 255, 255, 0);
        background-image: url('./assets/return2.png');
        background-size: cover;
        border-radius: 50%;
        transition: 0.5s;
        margin-left: 49.5%;
    }

    .return:hover {
        transform: scale(1.2);
    }

</style>
