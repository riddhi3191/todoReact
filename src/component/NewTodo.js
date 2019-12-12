import React, { Component } from 'react'
import { connect } from 'react-redux'
import todoActions from '../reducer/makeTodos'

class NewTodo extends Component {
  
  onUpdate = (e) => {
    this.setState({newTodo: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodos(this.state.newTodo);
    this.clearForm();
  }
  clearForm = () => {

    this.setState({
        newTodo :''
    });
    document.getElementById('devForm').reset();
}
  

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="devForm">
        <input 
          type="text"
          name="todoText"
          value={this.newTodo}
          onChange={this.onUpdate}/>
        <input type="submit" disable={this.newTodo}/>
      </form>
    )
  }
}

export default connect(({newTodo}) => ({
  newTodo : newTodo
}),{
  addTodos: todoActions.addTodo
})(NewTodo);
