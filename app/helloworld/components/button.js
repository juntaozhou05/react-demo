import React from 'react';

class Button extends React.Component{
	constructor(props, context) {
		super(props, context);
        this.state = {
			value: 2
		}
		this.handleChange = this.handleChange.bind(this);
	}
	//生成dom
    render() {
		let value = this.state.value;
        return (
        	<div>
				<input type="text" value={value} onChange={this.handleChange} />
        		<p>{value}</p>
        	</div>
        );
	}
	handleChange(e) {
		this.setState({
			value: e.target.value
		})
	}
}

export default Button;
