import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import {createStore} from 'redux';

const store = createStore(fn);

const state = store.getState();

const action = {
    type:"ADD_TODO",
    payload:"learn redux"
}

const ADD_TODO = "添加 TODO";
function addTodo(text) {
    return {
        type: "ADD_TODO",
        text
    }
}
const action = addTodo('learn redux');

store.dispatch(addTodo('Learn Redux'));

let store = createStore(todoApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

