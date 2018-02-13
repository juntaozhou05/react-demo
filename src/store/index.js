import {createStore} from 'redux'; 
import {combineReducers} from 'redux';
import change from '../reducers/change.js';  
import number from '../reducers/number.js';

const appReducer = combineReducers({
    change,
    number
});

const store = createStore(appReducer);  
export default store

