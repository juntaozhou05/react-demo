import todos from "./todos";
import visiblityFilter from "./visibityFilter";
import {combineReducers} from "redux"

const todoApp = combineReducers({
    todos,
    visiblityFilter
})

export default todoApp



