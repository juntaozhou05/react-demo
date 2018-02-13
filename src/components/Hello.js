import React, { Component } from 'react';
import { Button } from 'antd';
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
                <Button onClick={onClickCH}>翻译成中文</Button>
                <Button onClick={onClickEN}>翻译成英文</Button>
                <br/>
            </div>
         )
    }
}
 
export default Hello;
