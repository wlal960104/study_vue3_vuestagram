import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state(){
        return {
            // state 보관하고 싶으면 여기에, 모든 컴포넌트에서 공유 가능
            // 주의: 컴포넌트 안에서 직접 수정하기 금지 => 디버깅 편의성을 위해
            // state 수정하는 방법:
            // 1. 미리 store.js에서 수정방법을 정의해두고
            // 2. 그 방법을 컴포넌트에서 소환해서 수정하기
            // * 다른 컴포넌트에서 쓰는 데이터가 아니면 굳이 Vuex에 저장할 이유는 없음
            name : 'kim',
            age : 20,
            likes : 30,
            isLike : false,
            more : {},
        }
    },
    mutations : {
        // state(첫 번째 param) 는 위의 state
        // this.name = 'park' X
        // 실행하려면 실행할 곳에서 $store.commit('함수명')
        이름변경(state) {
            state.name = 'park'
        },
        plusAge(state, payload) {
            state.age += payload
        },
        goLikes(state) {
            console.log('state > ', state);
            if (state.isLike === false) {
                state.likes++
                state.isLike = true;
            } else {
                state.likes--
                state.isLike = false;
            }
        },
        setMore(state, data) {
            state.more = data;
        }
    },
    // ajax 하는 곳, 또는 오래 걸리는 작업들
    // 호출할 때 $store.dispatch('함수명')
    // actions 후의 state 변경도 mutations를 이용해야 함
    // *** state 변경은 무조건 mutations !
    // 보통 파라미터를 context라고 작명함 (context : store라고 생각하면 편함)
    actions : {
        getData(context) {
            // ajax 요청
            axios.get(`https://codingapple1.github.io/vue/more0.json`)
                .then((res) => {
                    console.log(res.data)
                    context.commit('setMore', res.data)
            })
        }

    }
})

export default store