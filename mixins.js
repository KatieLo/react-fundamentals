var ReactMixin = { //mixin is an object :) 
	getInitialState: function(){
		return {count: 0}
	},
	componentWillMount: function(){
		console.log("Will mount!")
	},
	incrementCount: function(){
		this.setState({count: this.state.count + 1})
	}
}

var App = React.createClass({
	render: function(){ //Button component has props of text
		return (
			<div>
			<Button text="This is the button"/> 
			< br />
			<Label text="This is the label"/>
			</div>
		);
	}
});

var Button = React.createClass({ // Button component
	mixins:[ReactMixin], // can call mixin wherever you want :) 
	render: function(){
		return (
			<button onClick={this.incrementCount}>{this.props.text} - {this.state.count}</button>
		);
	}
});
 
var Label = React.createClass({ // Label component
	mixins:[ReactMixin],
	componentWillMount: function(){ // mixing  the mixins component will mount with the componentWillMount function
		setInterval(this.incrementCount, 1000) // increment count every second
	},
	render: function(){
		return(
			<label>{this.props.text} - {this.state.count}</label>
		);
	}
});

React.render(< App/>, document.body);