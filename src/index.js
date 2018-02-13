import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'

import ConnectHello from './container/ConnectHello';
import registerServiceWorker from './registerServiceWorker'
import store from './store';
// console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ConnectHello />
        </Router>
    </Provider>,
    document.getElementById("root")
)
registerServiceWorker();
