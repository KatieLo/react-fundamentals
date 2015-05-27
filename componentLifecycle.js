var Button = React.createClass({
	getInitialState: function(){
		return {val: 0}
	}, 
	update: function(){
		this.setState({val: this.state.val + 1});
	},
	componentWillMount: function(){
		this.setState({m:2});
	}, 
	render: function(){
		return <button onClick={this.update}>{this.state.val * this.state.m}</button>
	}, 
	componentDidMount: function(){
		// To see the actual element!! console.log(this.getDOMNode());
		this.increment = setInterval(this.update, 500) // increments val ever 500 ms
	},
	componentWillUnmount: function(){
		clearInterval(this.increment);
	}

});

var App = React.createClass({
	mount: function(){
		React.render(< Button />, document.getElementById('app'));
	}, 
	unmount: function(){
		React.unmountComponentAtNode(document.getElementById('app'));
	},
	render: function(){
		return (
			<div>
				<button onClick={this.mount}>Mount</button>
				<button onClick={this.unmount}>Unmount</button>
				<div id='app'></div>
			</div>
		);
	}
});

React.render(< App />, document.body);