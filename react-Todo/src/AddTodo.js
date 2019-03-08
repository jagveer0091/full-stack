import React, { Component } from 'react';

class AddTodo extends Component{
    state = {
      item: ''
    }

    handleChange= (e) => {
      this.setState({
        item: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state);
      this.setState({
        item: ''
      })
    }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='add-todo'>Add todo</label>
          <input id='add-todo' type='text' onChange={this.handleChange} value={this.state.item}/>
        </form>
      </div>
    )
  }
}

export default AddTodo;
