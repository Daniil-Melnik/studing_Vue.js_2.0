<template>
    <div>
        <h2>{{ title }}</h2>
        <p v-for="a in answers">{{ a }}</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'type', 'answers']
}
</script>

<style>

</style>