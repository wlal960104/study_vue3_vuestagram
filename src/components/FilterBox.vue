<template>
    <a :class="`${filterName} filter-item`" :style="`background-image: url(${url})`" @click="fire">
        <slot></slot> <!-- slot : html 내용 데이터바인딩만 할 수 있음 / 여러개 바인딩 할때는 props가 더 편리하다. -->
<!--        <button @click="fire">버튼</button>-->
    </a>
</template>

<script>
export default {
    name : 'FilterBox',
    data () {
        return {
        }
    },
    props : {
        url: String,
        filterName: String
    },
    methods : {
        // mitt로 데이터 전송하는 법
        // 1. 발사하고 2. 수신한다
        // this.emitter.emit('작명', '데이터')
        fire () {
            this.emitter.emit('sendFilterName', this.filterName)
        }
    }
}
</script>

<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
    background-position : center;
}
</style>