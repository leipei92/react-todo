import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(

    JSON.parse(localStorage.getItem('saveTodoList')) || []
  )

  React.useEffect(() => {

    localStorage.setItem('saveTodoList', JSON.stringify(todoList));

  }, [todoList]

  )
  return [todoList, setTodoList];
}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState()

  const removeTodo = (id) => {

    setTodoList(prevTodoList => {
      return prevTodoList.filter(
        (todo) => todo.id !== id
      )
    }
    )
  }
  const addTodo = (newTodo) => {
    setTodoList(prevTodoList => [...prevTodoList, newTodo]);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />

    </>
  );
}

export default App;
