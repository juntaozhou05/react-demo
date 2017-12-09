import React from 'react';

class Player extends React.Component{
	constructor(props, context) {
		super(props, context);
        this.state = {
			value: 2
		}
		
	}
	//生成dom
    render() {
		let value = this.state.value;
        return (
        	<div>
				
        	</div>
        );
	}
	handleChange(e) {
		this.setState({
			value: e.target.value
		})
	}
}

export default Player;
