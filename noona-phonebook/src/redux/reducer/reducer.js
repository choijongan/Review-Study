let initialState={
    contactList:[] //이 배열안에 연락처들을 넣을 예정
} //기본적인 세팅값이 없을 때는 공백으로 둔다.

function reducer(state=initialState,action){ //state는 항상 처음에 initialState를 넣어줘서 초기화 해야됨
    //.action값이 너무 많다면 안쓰게 하는 객체destructuring 문법!.action은 객채(type:,payload: 가 있는)다. 
    const {type, payload} = action
    switch(type){
        case 'ADD_CONTACT':
          return{
            ...state,
            contactList:[...state.contactList,
                {
                  name:payload.name,
                  phoneNumber:payload.phoneNumber 
                }
            ]
        }
        default:  //switch문은 항상 default값을 써줘야 한다.
            return {...state}
    }
    // .action다 쓴 코드
    // switch(action.type){
    //     case 'ADD_CONTACT':
    //       return{
    //         ...state,
    //         contactList:[...state.contactList,
    //             {
    //               name:action.payload.name,
    //               phoneNumber:action.payload.phoneNumber 
    //             }
    //         ]
    //     }
    //     default:  switch문은 항상 default값을 써줘야 한다.
    //         return {...state} 
    // }
}

export default reducer