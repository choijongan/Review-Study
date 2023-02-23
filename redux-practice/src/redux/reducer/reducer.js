let initialState={
    count:0
}

//reducer는 자동으로 usedispatch가 던진 액션을 받아올 수 있음.
//store는 가만히 있다가 reducer가 return해주면 그냥 적용해줌. reducer는 항상 return해줘야됨.
//...state는 만약 state가 여러개면 state값은 유지하되, count만 바꾼다는 뜻.
//...state가 햇갈린다면 ...state는 기본적으로 그냥 쳐야한다고 생각하면 됨.
function reducer(state=initialState, action){
    if(action.type==="INCREMENT") {
        return {...state, count: state.count + 1 } //...state치고 뒤에 바꾸고 싶은 내용
    }
}

export default reducer