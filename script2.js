var App =  React.createClass({
	render: function(){
		return (
			<Button>I <Heart /> React</Button> // The stuff inside the Button tags is what gets passed as this.props.children. It doesn't have to be a component.Here <div>To the Moon!</div> is passed as this.props.children to the native div component
		);
	}
});

var Button = React.createClass({
	render: function(){
		return (
			<button>{this.props.children}</button> //Children allow you to pass components as data to other components
		);
	}
});

var Heart = React.createClass({
	render: function(){
		return(
			<span className="glyphicon glyphicon-heart"></span>
		);
	}
});

React.render(<App />, document.body);

/*
If there are many children, then this.props.children is an array. If only one, then there is no array wrapper. 
Many usefulc children utilities here: https://facebook.github.io/react/docs/top-level-api.html#react.children
*/