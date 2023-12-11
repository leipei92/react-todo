import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


const App = () => {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem('savedTodoList')) || []
          }
        })
      }, 2000)
    })
      .then((result) => {
        setTodoList(result.data.todoList);
        setIsLoading(false);
      });
  }, [])

  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList))
    }
  }, [todoList, isLoading]);

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
      {isLoading ? (
        <p>Loading...</p>
      ) : (<TodoList
        todoList={todoList}
        onRemoveTodo={removeTodo} />
      )}
    </>
  );
};




export default App;
