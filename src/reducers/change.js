import {TOCHINE,TOENGLISH} from '../actions/change.js'

let initState = {
    content: "hello world"
}

export default function change(state = initState,action){
    switch(action.type){
        case TOCHINE:
            return {content :"你好世界"}
        case TOENGLISH:
            return {content :"hello world"}
        default:
            return state
    }
}

