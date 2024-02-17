<template>
    <div>
        <div v-for="q in questions">
            <A v-if="q.id === qn"
                    :answers="q.answers"
                    :title="q.title"
                    :type="q.type"
                    :qw_name="q.id"
                    :qid="q.id">
                </A>
        </div>
        <button v-on:click="qn != 1 ? qn = qn - 1 : qn = qn">Назад</button>
        <button v-on:click="qn != 10 ? qn = qn + 1 : qn = qn">Вперёд</button>
    </div>
</template>

<script>
import A from "./components/Question"
import json from './recources/data.json'
export default {
    data(){
        return{
            questions: json,
            qn : 3,
            gAnswers: { 1 : [], 2 : [], 3 : [], 4 : [], 5 : [], 6 : [], 7 : [], 8 : [], 9 : [], 10 : []}
        }
    },
    methods: {
        //receiveData(s, n)
    },
    components: {
		A
	}
}
</script>

<style>

</style>
