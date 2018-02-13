import React, { Component } from 'react';
import ConnectNumber from '../container/ConnectNumber';
import {Route,Link} from 'react-router-dom'
// import PropTypes from 'prop-types'

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {msg,onClickCH,onClickEN} = this.props
        return ( 
            <div>
                <div>{msg}</div>
                <button onClick={onClickCH}>翻译成中文</button>
                <button onClick={onClickEN}>翻译成英文</button>
                <br/>
            </div>
         )
    }
}
 
export default Hello;
