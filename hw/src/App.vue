<template>
    <div>
       <A :answers="thanswers" :title="thtitle" :type="thtype[k]"></A>
       <button v-on:click="k === 1 ? k = 0 : k = 1">Поменять</button>
    </div>
</template>

<script>
import A from "./components/Question"
export default {
    data(){
        return{
            thanswers: ["25", "4", "48", "9"],
            thtitle: "пять ю пять",
            thtype: ['radio', 'checkbox'],
            k: 0
        }
    },
    components: {
		A
	}
}
</script>

<style>

</style>
