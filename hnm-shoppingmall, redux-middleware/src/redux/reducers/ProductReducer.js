import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    productList: [],
}

// function productReducer(state = initialState, action){
//     let {type, payload} = action
//     switch (type) {
//         case 'GET_RPODUCT_SUCCESS':
//             return {...state, productList: payload.data}
//             default :
//                 return {...state}
//     }
// }

// export default productReducer.
const productSlice = createSlice({  //createSlice가 반환하는 내용을 어디에 저장을 합시다!
    name:'product',
    initialState,
    reducers:{
        getAllproducts(state,action){
           state.productList = action.payload.data  
           //Slice가 알아서 return해주고, ...state해줌. 바꾸고 싶은 값만 멘션해주면 된다.
           }, //추가 케이스를 더 만들어야 하는 경우 함수를 새로 추가하면 됨!
        getSingleProduct(state,action){
            state.selectedItem = action.payload.data
           },
    },
})

console.log('aaaaaaa',productSlice)

export default productSlice.reducer