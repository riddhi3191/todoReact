import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.index,
      editing: false,
      editTodo: this.props.todo,
      oldTodo: this.props.todo
    }
  }

  deleteTodo = (e) => {
    e.preventDefault();
    this.props.deleteTodo(this.state.id);
  }

  updateTodo = (e) => {
    e.preventDefault();
    this.setState({editing:true})
  }

  saveUpdateTodo = (e) => {
    e.preventDefault();
    this.props.updateTodo(this.state.id, this.state.editTodo);
    this.setState({editing:false})
  }

  inputOnchange = (e) => {
    e.preventDefault();
    this.setState({editing:e.target.value})
  }

  cancelUpdateChange =(e) => {
    e.preventDefault();
    this.setState({editing:false})

  }

  

  render() {
    return (
      <li>

        {
          (this.state.editing)
          ? 
          <span>
                <input type="text" value={this.state.editTodo} onChange={this.inputOnchange} />
                <button onClick={this.cancelUpdateChange}>Cancel</button>
              </span>
            : 
            <span>{' ' + this.props.todo+"\t"}</span>
          }
          <button disabled={this.state.editing} onClick={this.deleteTodo}>Delete</button>
          <button hidden={this.state.editing} onClick={this.updateTodo}>Update</button>
          <button hidden={!this.state.editing} disabled={!this.state.editTodo} onClick={this.saveUpdateTodo}>Save</button>
      </li>
    )
  }

}

export default Todo;
