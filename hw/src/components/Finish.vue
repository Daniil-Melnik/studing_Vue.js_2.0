<template>
    <div>
        <table>
            <tr v-for="q in questions">
                <td>{{ q.id }}</td>
                <td>{{ q.title }}</td>
                <td>
                    <tr v-for="a in q.true" >
                        {{ a }}
                    </tr>
                </td>
                <td>
                    <tr v-for="a in ganswers[q.id]" :class="getClass(q.id, ganswers[q.id])">
                        {{ a }}
                    </tr>
                </td>
            </tr>
        </table>
        <button v-on:click="getClass(3, ganswers[3])">qq</button>
    </div>
</template>
<script>
export default {
    props: ['questions', 'ganswers'],

    data(){
        return{
            fanswers: [],
            classNames: [],
        }
    },


    methods: {
        getClass(ni, arr){
            const arr1 = Array.from(arr);;
            const darr1 = Array.from(this.questions[ni - 1].true);;
            if (arr1.sort().join('') === darr1.sort().join('')){
                return "good"
            }
            else{
                return "bad"
            }           
        },

        isArraysEqual(firstArray, secondArray) {
            return firstArray.sort.toString() === secondArray.sort.toString();
        }
        
    } 
    
}
</script>
<style>
    .bad{
        background-color: red;
    }
    .good{
        background-color: green;
    }
</style>