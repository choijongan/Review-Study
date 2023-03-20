import { combineReducers } from 'redux'
import authenticateReducer from './authenticateReducer'
import productReducer from './ProductReducer'

export default combineReducers({
    auth : authenticateReducer,
    product : productReducer,
}) //index.js에 reducer 두개를 불러오고 auth, product라는 임의의 이름을 주고 합친다. combinereducers는 합칠때 필요함.