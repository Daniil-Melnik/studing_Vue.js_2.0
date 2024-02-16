<template>
    <div>
        <div v-for="q in questions">
            <A :answers="q.answers" :title="q.title" :type="q.type" :qw_name="q.id"></A>
        </div>
    </div>
</template>

<script>
import A from "./components/Question"
import json from './recources/data.json'
export default {
    data(){
        return{
            questions: json
        }
    },
    components: {
		A
	}
}
</script>

<style>

</style>
