import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import change from "../reducers/change.js";
import number from "../reducers/number.js";

const appReducer = combineReducers({
  change,
  number
});

const store = createStore(appReducer, applyMiddleware(ReduxThunk.default));
export default store;
