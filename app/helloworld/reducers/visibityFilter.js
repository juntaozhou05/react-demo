
const visibilityFilter = (state,action) => {
    switch(action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.visibilityFilter
        default: 
            return state
    }
}