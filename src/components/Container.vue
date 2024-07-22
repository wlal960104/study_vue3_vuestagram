<template>
    <div>
        <Post :post="data[i]" v-for="(a,i) in data" :key="i"/>
<!--        <Post :data="data"/>-->
<!--        <Post :data="data"/>-->
    </div>
</template>

<script>
import Post from './Post.vue'
export default {
    name: 'Container',
    components : {
        Post : Post
    },
    props : {
        data : Array
    }
}
</script>

<style>
</style>