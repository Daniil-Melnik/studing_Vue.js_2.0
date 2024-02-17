<template>
    <div>
        <table class="main_table">
            <tr>
                <th>№</th>
                <th>Вопрос</th>
                <th>Верные ответы</th>
                <th>Ваши ответы</th>
            </tr>
            <tr v-for="q in questions">
                <td class="good3">{{ q.id }}</td>
                <td class="good2">{{ q.title }}</td>
                <td class="good1">
                    <tr v-for="a in q.true" >
                        {{ a }}
                    </tr>
                </td>
                <td :class="getClass(q.id, ganswers[q.id])">
                    <tr v-for="a in ganswers[q.id]">
                        {{ a }}
                    </tr>
                </td>
            </tr>
        </table>
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
        background: rgba(197, 0, 0, 0.3);
        border-radius: 5px;
        width: 250px;
    }
    .good{
        background: rgba(13, 96, 0, 0.3);
        border-radius: 5px;
        width: 250px;
    }

    .good1 {
        background: rgba(238, 240, 255, 0.9);
        border-radius: 5px;
        width: 250px;
    }

    .good2 {
        background: rgba(238, 240, 255, 0.9);
        border-radius: 5px;
        width: 550px;
    }

    .good3 {
        background: rgba(238, 240, 255, 0.9);
        border-radius: 5px;
        width: 50px;
        text-align: center;
    }

    .main_table {
        margin-left: 15%;
    }

</style>