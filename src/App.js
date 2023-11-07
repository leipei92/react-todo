import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {

  const [todoList, setTodoList] = React.useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {/* is this addTodo below doing anything? Why is it here? ask during mentor session*/}
      <p>
        {addTodo}
      </p>
      <TodoList todoList={todoList} />

    </div>
  );
}

export default App;
