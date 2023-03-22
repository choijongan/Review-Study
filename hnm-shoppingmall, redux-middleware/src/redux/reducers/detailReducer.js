let initialState = {
    product:null,
}

function detailReducer(state = initialState, action) {
        let {type,payload} = action
        switch(type){
            case 'GET_DETAIL_SUCCESS':
                return{...state, product: payload.data}
            default:
                return{...state}
        }
}

export default detailReducer;