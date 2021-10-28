import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import {combineReducers} from 'redux';

const AllReducers = combineReducers({
    counter : counterReducer,isLogged : isLoggedReducer
})

export default AllReducers;