<template>
    <div>
        <h2>{{ title }}</h2>
        <p v-if="type === 'checkbox'" v-for="a in answers"><input :type="type" :value="a.ans" :name="qw_name" v-model="checkedAnswers" v-on:change="onChange">{{ a.ans }}</p>
        <p v-if="type === 'radio'" v-for="a in answers"><input :type="type" :value="a.ans" :name="qw_name" v-model="picked" v-on:change="onChange">{{ a.ans }}</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'type', 'answers', 'qw_name', 'qid'],
    data(){
        return{
            checkedAnswers: [],
            picked: "",
        }
    },
    methods: {
        onChange(){
            this.type === "checkbox" ? console.log(this.checkedAnswers) : console.log(this.picked)
            //this.$emit('senddata', e, this.qid);
        }
    }
}
//v-on:change="onChange($event.target.value)"
</script>

<style>

</style>