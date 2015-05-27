var Button = React.createClass({
	getInitialState: function(){
		return {increasing: false}
	},
	update: function(){
		this.setProps({val: this.props.val + 1}) // setProps is only available on components passed directly into React.Render 
	}, 
	// called whenever a new property is being set 
	componentWillReceiveProps: function(nextProps){ 
		this.setState({increasing: nextProps.val > this.props.val}); //evaluate to a boolean 
	},
	// 
	shouldComponentUpdate: function(nextProps, nextState){
		return nextProps.val % 2 ===  0; // if the next property.val is remainder 2, update
	},
	render: function(){
		console.log(this.state.increasing)
		return (
			<button onClick={this.update}>{this.props.val}</button>
			);
	}, 
	componentDidUpdate: function(prevProps, prevState){
		console.log("previous props", prevProps);
	}

});

React.render(< Button val={0} />, document.body);