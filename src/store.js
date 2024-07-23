import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            // state 보관하고 싶으면 여기에, 모든 컴포넌트에서 공유 가능
            // 주의: 컴포넌트 안에서 직접 수정하기 금지 => 디버깅 편의성을 위해
            // state 수정하는 방법:
            // 1. 미리 store.js에서 수정방법을 정의해두고
            // 2. 그 방법을 컴포넌트에서 소환해서 수정하기
            name : 'kim',
            age : 20,
            likes : 30,
            isLike : true
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
            if (state.isLike === true) {
                state.likes++;
                state.isLike = false;
            } else {
                state.likes--
                state.isLike = true;
            }
        }
    }
})

export default store