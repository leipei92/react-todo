import React from 'react';

const todoList = [
    {
      id:'1',
      title:'Walk the dog',
    },

    {
      id:'2',
      title:'Clean my car',
    },

    {
      id:'3',
      title:'Finish Homework',
    }

];

function App() {
  return (
    <div>
      <h1>Todo List</h1>

      <ul>
        {todoList.map(function (item) {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
      
    </div>
  );
}

export default App;
