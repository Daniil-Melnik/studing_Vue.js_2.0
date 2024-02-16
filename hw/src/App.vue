<template>
    <div>
       <A :answers="thanswers" :title="thtitle"></A>
    </div>
</template>

<script>
import A from "./components/Question"
export default {
    data(){
        return{
            thanswers: ["25", "4", "48", "9"],
            thtitle: "пять ю пять"
        }
    },
    components: {
		A
	}
}
</script>

<style>

</style>
