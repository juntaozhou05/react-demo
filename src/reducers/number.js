import {NUMBER,FLOAT} from '../actions/number.js'

let initState = {
    number: "123"
}

export default function change(state = initState,action){
    switch(action.type){
        case NUMBER:
            return {number :"123"}
        case FLOAT:
            return {number :"123.0"}
        default:
            return state
    }
}



