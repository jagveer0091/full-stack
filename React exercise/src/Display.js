import React, { Component } from 'react';


class Display extends Component {
  render(){
    console.log(this.props);
    return(
      <div>
        
        <div> Name: {this.props.name}</div>
        <div> Age: {this.props.age}</div>
        <div> Birthmonth: {this.props.birthMonth} </div>

      </div>
    );
  }
}

export default Display;
