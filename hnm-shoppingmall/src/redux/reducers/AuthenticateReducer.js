let initialState={
    id:'',
    password:'',
    authenticate:false
}

function AuthenticateReducer(state=initialState,action){
    let {type,payload} = action
    switch(type){
        case 'LOGIN_SUCCESS':
            console.log('LOGIN_SUCCESS REDUCER')
            return{
                ...state, 
                id:payload.id, 
                password: payload.password, 
                authenticate: true,
            }
        default:
            return{...state}
    }
}

export default AuthenticateReducer