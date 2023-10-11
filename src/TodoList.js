import React from 'react';

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
      {todoList.map(function (item) {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>

  )
}

export default TodoList;