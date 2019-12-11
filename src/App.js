import React, { Component } from 'react';
import Todos from './Todos';
import NewTodo from './NewTodo'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: ['laundry', 'dishes']
    }
  }

  addTodos = (todos) => {
    this.setState({todos: [...this.state.todos,todos]})
  }

  updateTodos = (id,todos) => {

    
  }

  deleteTodos = (todoId) => {

    this.setState(
      ({todos: [...this.state.todos].filter((val, id) => id !== todoId)
        })
      
    )
  }

  render() {
    return (
      <main>
        <br />
        <NewTodo  addTodos={this.addTodos}/>
        <br />
        <p>Current To Do List: </p>
        <Todos todos={this.state.todos}
                delete={this.deleteTodos}
                update={this.updateTodos}/>
      
      </main>
    );
  }
}

export default App;
