import React, { Component } from 'react';

import '../Style/ios.css';

class Ios extends Component {
  constructor(props){
    super(props);
    this.state = {
      a: '',
      b:'50'
    }
  }
  onChange(value){
    value = value.toString().replace(/\D/g,'');
    value = value > 1000000 ? 100 : value;
    this.setState({value})
  }
  render() {
    return (
      <div className="Ios bgBox">
        this is Ios
      </div>
    );
  }
}

export default Ios;
