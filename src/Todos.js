import React from 'react'
import Todo from './Todo'

const Todos = (props) =>
  <ol>
    {
      props.todos.map((ele, id) => {
        return <Todo
          key={id}
          todo={ele}
          index={id}
          deleteTodo={props.delete}
          update={props.update}
        />
      })
    }
  </ol>

export default Todos
