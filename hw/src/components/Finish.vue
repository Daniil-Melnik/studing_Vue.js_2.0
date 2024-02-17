<template>
    <div>
        <table>
            <tr v-for="q in questions">
                <td>{{ q.id }}</td>
                <td>{{ q.title }}</td>
                <td>
                    <tr v-for="a in q.answers" v-if="a.res">
                        {{ a.ans }}
                    </tr>
                </td>
                <td>
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
            fanswers: []
        }
    }, 
    
}
</script>
<style lang="">
    
</style>