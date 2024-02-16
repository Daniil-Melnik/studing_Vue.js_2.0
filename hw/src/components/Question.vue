<template>
    <div>
        <h2>{{ title }}</h2>
        <p v-for="a in answers"><input :type="type" value="a" :name="qw_name">{{ a.ans }}</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'type', 'answers', 'qw_name']
}
</script>

<style>

</style>