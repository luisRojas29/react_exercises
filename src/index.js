import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

class CountingParent extends React.Component{

	state = {
		actionCount: 0
	}

	handleAction = (action) => {
		console.log("child did: " + action);

		this.setState({
			actionCount : this.state.actionCount + 1
		});
	}

	reset = () =>{
		this.setState({
			actionCount : 0
		});
	}

	render(){
		return(
			<div>
				<Child onAction={this.handleAction} onReset={this.reset} />
				
				<p>Clicked {this.state.actionCount} times </p>
			</div>
		);
	}

}

function Child({onAction, onReset}){
	return(
		<div>
			<button onClick={onAction}>Click Me!</button>
			<button onClick={onReset}>Reset </button>
		</div>
	)
}

ReactDOM.render(<CountingParent/>, document.querySelector('#root'));
