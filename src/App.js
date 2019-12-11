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

  updateTodo = (todoId, newTodo) => {
    this.setState(
      (state) => {
        let newTodos = [...state.todos];
        newTodos[todoId] = newTodo;
        return ({todos: newTodos})
      }
    )
  }

  deleteTodo = (todoId) => {

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
                delete={this.deleteTodo}
                update={this.updateTodo}/>
      
      </main>
    );
  }
}

export default App;
