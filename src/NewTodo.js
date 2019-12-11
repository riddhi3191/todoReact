import React, { Component } from 'react'

class NewTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newTodo: ''
    }
  }
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
          value={this.state.newTodo}
          onChange={this.onUpdate}/>
        <input type="submit" disable={this.state.newTodo}/>
      </form>
    )
  }
}

export default NewTodo
