import React from 'react';
import TodoListItem from './TodoListItem';



const TodoList = ({ todoList }) => {
  return (

    <ul>
      {todoList.map(function (item) {
        return <TodoListItem key={item.id} todo={item.title} />;
      })}
    </ul>

  )
}


export default TodoList;
