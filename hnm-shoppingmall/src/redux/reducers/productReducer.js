import { createSlice } from "@reduxjs/toolkit"
let initialState = {
    productList:[]
}

// function ProductReducer(state=initialState,action){
//     let {type, payload} = action
//     switch(type){
//         case 'GET_PRODUCT_SUCCESS':
//             return{...state, productList:payload.data}
//         default:
//             return{...state}
//     }
// }

// export default ProductReducer;


const productSlice =  createSlice({
    name:'product',
    initialState,
    reducers:{
        getAllProducts(state,action){
            state.productList = action.payload.data
        },
        getSingleProduct(state,action){
            state.selectedItem = action.payload.data
        }
    }
})

console.log('pppp',productSlice)