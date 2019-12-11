import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      editTodo: this.props.todo,
      oldTodo: this.props.todo
    }
  }

  

  render() {
    return (
      <li>

        {
          (this.state.editing)
          ? 
          <span>
                <input type="text"  />
                <button >Cancel</button>
              </span>
            : 
            <span>{' ' + this.props.todo+"\t"}</span>
          }
          <button disabled={this.state.editing}>Delete</button>
          <button hidden={this.state.editing}>Update</button>
          <button hidden={!this.state.editing} disabled={!this.state.editTodo}>Save</button>
      </li>
    )
  }

}

export default Todo;
