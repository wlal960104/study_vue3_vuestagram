<template>
    <div>
        <!-- vue3부터 v-if와 v-for 동시에 쓰지 못 함-->
        <div v-if="step === 0">
            <Post :post="data[i]" v-for="(a,i) in data" :key="i"/>
        </div>

        <!-- 필터선택페이지 -->
        <div v-if="step === 1">
            <div :class="`${filterName} upload-image`" :style="`background: url(${url})`"></div>
            <div class="filters">
                <!-- 필터 영역 -->
                <FilterBox v-for="(a,i) in filterData" :key="a" :url="url" :filterName="filterData[i]">
                    {{a}}
                </FilterBox>
            </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-if="step === 2">
            <div class="upload-image" :style="`background: url(${url})`"></div>
            <div class="write">
                <textarea class="write-box" @input="$emit('write', $event.target.value)" placeholder="write!"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import Post from './Post.vue'
import FilterBox from "@/components/FilterBox.vue";
import filterData from "@/assets/filterData";

export default {
    name: 'Container',
    data() {
        return {
            filterData
            // myText : ''
            // step: 0 // 페이징 처리를 위한 변수 (step 0: post, step 1: 필터선택화면, step 2: 글 쓰는 화면)
        }
    },
    components : {
        Post : Post,
        FilterBox : FilterBox
    },
    props : {
        data : Array,
        step : Number,
        url : String,
        filterName : String
    },
    updated () {
        // this.$emit('sendMyText', this.myText);
    }
}
</script>

<style>
.upload-image{
    width: 100%;
    height: 450px;
    background: url("https://picsum.photos/100?random=0");
    background-size : cover;
}
.filters{
    overflow-x:scroll;
    white-space: nowrap;
}
.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
}
.filters::-webkit-scrollbar {
    height: 5px;
}
.filters::-webkit-scrollbar-track {
    background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
    background: #555;
}
.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>