import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter; // 글로벌한 변수 보관함, 보관함에 {emitter : emitter} 추가한 것
// 자주 쓰는 라이브러리 있으면 여기에 등록하기
// ex) app.config.globalProperties.axios = axis;
// => vue 파일에서 import axios 해올 필요 없이 this.axios 로 사용 가능

import store from './store.js'

app.use(store).mount('#app')
