import React, { Component } from 'react';

class About extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      value: this.props.value
    }
  }

  handleChange(e) {
    this.props.onChange(e.target.value)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
        value: nextProps.value
    })
  }

  plus() {
    const value = ++this.input.value;
    this.props.onChange(value)
  }
  render() {
    return (
      <div className="About bgBox">
          <input
            value = {this.state.value}
            ref = {ref => this.input = ref}
            onChange = {e => this.handleChange(e)}
          />
          <button onClick={()=>this.plus()}>+</button>
      </div>
    );
  }
}

export default About;
