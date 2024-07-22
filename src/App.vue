<template>
    <div class="header">
        <ul class="header-button-left">
            <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li v-if="step === 1" @click="step++">Next</li>
            <li v-if="step === 2" @click="publish">발행</li>

        </ul>
        <img src="./assets/logo.png" class="logo" />
    </div>
    <Container :data="data" :step="step" :url="url" @write="myText = $event"/>
    <button @click="more">더보기</button>

    <div class="footer">
        <ul class="footer-button-plus">
            <input @change="upload" type="file" id="file" class="inputfile" />
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
            step: 0, // 페이징 처리를 위한 변수 (step 0: post, step 1: 필터선택화면, step 2: 글 쓰는 화면)
            url: '',
            myText : '', // 자식 컴포넌트에서 받아와야 할 텍스트
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
        // 업로드 함수 (업로드 후엔 다음 페이지로 보내기 + 업로드한 이미지 띄우기)
        // 파일 업로드하는 방법
        // 1. FileReader(): 파일을 글자로 변환해줌
        // 2. URL.createObjectURL(): 이미지의 가상 URL을 생성해줌
        upload(e) {
            let file = e.target.files;
            console.log(file[0]);
            let url = URL.createObjectURL(file[0])
            this.url = url;
            this.step++; // 다음 페이지로 보내기
        },
        // 발행버튼 클릭 시
        publish() {
            // 발행버튼 누르면?
            // this.data 에 내가 쓴 글 밀어 넣기
            var myContent = {
                name: "Kim Hyun",
                userImage: "https://picsum.photos/100?random=3",
                postImage: `${this.url}`,
                likes: 36,
                date: "May 15",
                liked: false,
                content: this.myText,
                filter: "perpetua"
            };

            this.data.unshift(myContent); // unshift: 제일 앞쪽에 자료 넣기
            this.step = 0; // 첫 페이지로 변

        }
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
