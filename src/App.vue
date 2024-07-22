<template>
    <div class="header">
        <ul class="header-button-left">
            <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li>Next</li>
        </ul>
        <img src="./assets/logo.png" class="logo" />
    </div>

    <Container :data="data"/>
    <button @click="more">더보기</button>

    <div v-if="step === 0">내용0</div>
    <div v-if="step === 1">내용1</div>
    <div v-if="step === 2">내용2</div>
    <button @click="step = 0" >버튼0</button>
    <button @click="step = 1">버튼1</button>
    <button @click="step = 2">버튼2</button>

    <div class="footer">
        <ul class="footer-button-plus">
            <input type="file" id="file" class="inputfile" />
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>

</template>

<script>
import Container from "@/components/Container.vue"
import data from "@/assets/postData.js"
import axios from "axios";

export default {
    name: 'App',
    data() {
        return {
            data : data,
            clickNum : 0,
            step: 0
        }
    },
    components: {
      Container : Container
    },
    methods: {
        // 더보기 클릭 시
        more () {
            // axios 라이브러리 사용
            // 실패시 실행할 코드는 .catch()
            axios.get(`https://codingapple1.github.io/vue/more${this.clickNum}.json`)
                .then(res => {
                    this.data.push(res.data); // 기존 post data에 추가, vue는 데이터가 변하면 자동으로 html 변함
                    this.clickNum++;
                })
                .catch((err)=>{
                    // 에러 시 실행할 코드
                    console.log(err)
                })
        },
    }

}
</script>

<style>
body {
    margin: 0;
}
ul {
    padding: 5px;
    list-style-type: none;
}
.logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
}
.header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
}
.header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
}
.header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
}
.footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
}
.footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
}
.sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
}
.inputfile {
    display: none;
}
.input-plus {
    cursor: pointer;
}
#app {
    box-sizing: border-box;
    font-family: "consolas";
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}
</style>
