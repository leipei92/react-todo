import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
  {
    id: '1',
    title: 'Walk the dog',
  },

  {
    id: '2',
    title: 'Clean my car',
  },

  {
    id: '3',
    title: 'Finish Homework',
  }

];

const TodoList = () => {
  return (
    <ul>
      {todoList.map(({ id, title }) =>
        <TodoListItem key={id} todo={title} />)}
    </ul>

  )
}

export default TodoList;
