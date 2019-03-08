import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length>0 ? todos.map( todo => {
    return (
       <div className='collection-item' key={todo.id}>
         <span className='blue-text' onClick={() => {deleteTodo(todo.id)}}>{todo.item}</span>
       </div>
    )
  }) : (
    <p className='center red-text'> You don't have any Todos left </p>
  )
  return(
    <div className='todos collection'>
      {todoList}
    </div>
  )
}
export default Todos;
