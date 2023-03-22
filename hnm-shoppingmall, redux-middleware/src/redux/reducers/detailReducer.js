let initialState = {
    selectedItem :null,
}

function detailReducer(state = initialState, action) {
        let {type,payload} = action
        switch(type){
            case 'GET_DETAIL_SUCCESS':
                return{...state, selectedItem: payload.data}
            default:
                return{...state}
        }
}

export default detailReducer;