var App = React.createClass({ // Parent or Owner

  getInitialState: function(){ // state is updated and maintained by component
    return { // an object where each key is a key in 
      red: 0,
      green: 0,
      blue: 0
    }
  },

  updateState: function(){
    this.setState({
      red:this.refs.red.refs.slider.getDOMNode().value,
      green:this.refs.green.refs.slider.getDOMNode().value,
      blue:this.refs.blue.refs.slider.getDOMNode().value
      });
  },

  render: function(){
      return (
        <div> 
          <ColourSlider ref="red" updateState={this.updateState} />
          <label>{this.state.red}</label><br/>
          <ColourSlider ref="green" updateState={this.updateState} />
          <label>{this.state.green}</label><br/>
          <ColourSlider ref="blue" updateState={this.updateState} />
          <label>{this.state.blue}</label><br/>
        </div>
        );
   }
});
 
var ColourSlider = React.createClass({ // Baby is a child of App. Or, ownee
  render: function(){
      return (
        <div>
        <input ref="slider" type="range" min="0" max="255" onChange={this.props.updateState}/>
        </div>
        );

   }
});
   
React.render(< App />, document.body);
  