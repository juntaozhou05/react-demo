import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import ConnectHello from './container/ConnectHello';
import ConnectNumber from './container/ConnectNumber';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router>
                <div>
                    <Link to={`/`}>翻译</Link>
                    <br/>
                    <Link to={`/number`}>数字变化</Link>
                    <Route path={`/`} component={ConnectHello}></Route>
                    <Route path={`/number`} component={ConnectNumber}></Route>
                </div>
            </Router>
         )
    }
}
 
export default App;