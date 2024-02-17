<template>
    <div >
        <h2>Вопрос № {{ qid + ". " + title }}</h2>
        <p class="qw" v-if="type === 'checkbox'" v-for="a in answers"><input type="checkbox" :value="a.ans" :name="qw_name"  v-model="checkedAnswers" v-on:change="onChange">{{ a.ans }}</p>
        <p class="qw" v-if="type === 'radio'" v-for="a in answers"><input type="radio" :value="a.ans" :name="qw_name" v-model="picked" v-on:change="onChange">{{ a.ans }}</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'type', 'answers', 'qw_name', 'qid', 'checked'],
    data(){
        return{
            checkedAnswers: this.checked,
            picked: this.checked[0],
        }
    },
    methods: {
        onChange(){
            this.$emit('senddata', this.qid, this.checkedAnswers, this.picked)
            console.log( this.qid + "-" + this.checkedAnswers + this.picked)
        }
    },
}
</script>

<style>
    .qw {
        text-align: left;
        width: 50%;
        margin-left: 45%;
    }
</style>