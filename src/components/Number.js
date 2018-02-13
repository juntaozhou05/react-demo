import React, { Component } from 'react';

class Number extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {number,onClickNU,onClickFL} = this.props
        return ( 
            <div>
                <div>{number}</div>
                <button onClick={onClickNU}>点击变为整数</button>
                <button onClick={onClickFL}>点击变为小数</button>
            </div>
         )
    }
}
 
export default Number;