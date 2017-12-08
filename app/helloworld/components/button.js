import React from 'react';

class Button extends React.Component{
	constructor(props, context) {
		super(props, context);
        this.state = {
			count:1
		}
		this.add = this.add.bind(this);
    }
    render() {
        return (
        	<div>
	            <button onClick={this.add}>Count {this.state.count}</button>
        	</div>
        );
	}
	add() {
		this.setState({
			count: this.state.count + 1
		});
	}
}

export default Button;
