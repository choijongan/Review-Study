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

// export default productReducer
createSlice({
    name:'product',
    initialState,
    reducers:{
        getAllproducts(state,action){
           state.productList = action.payload.data  
           //Slice가 알아서 return해주고, ...state해줌. 바꾸고 싶은 값만 멘션해주면 된다.
           
        }
    }
})