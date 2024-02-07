import React from 'react';
import TodoList from '././components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import style from './App.module.css';




const AIRTABLE_API_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

function App() {

  const [todoList, setTodoList] = React.useState([])
  const [isloading, setIsLoading] = React.useState(true)

  const fetchData = React.useCallback(async () => {

    const options = {
      method: 'GET',
      headers: { Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}` }
    }
    try {
      const response = await fetch(AIRTABLE_API_URL, options)

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      const todos = data.records.map((todo) => {
        return { title: todo.fields.title, id: todo.id, }
      })
      setTodoList(todos)
      setIsLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }, [])

  const addTodo = async ({ title }) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify({
        fields: {
          title
        },
      }),
    };
    try {
      const response = await fetch(AIRTABLE_API_URL, options);
      if (!response.ok) {
        throw new Error(`Something went wrong: ${response.status}`);
      }

      const airtableData = await response.json();
      setTodoList((prevTodoList) => [
        ...prevTodoList,
        {
          id: airtableData.id,
          title: airtableData.fields.title,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };


  const removeTodo = async (id) => {
    try {
      const response = await fetch(`${AIRTABLE_API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const newList = todoList.filter(item =>
        item.id !== id
      )
      setTodoList(newList)
    } catch (error) {
      console.error('Error:', error.message);

    }
  }

  React.useEffect(() => {
    fetchData()
  }, [fetchData])


  return (
    <BrowserRouter className={style.container}>
      <nav >
        <h1>
          <ul >
            <ol className={style.header}><Link to="/" >Home</Link></ol>
            <ol className={style.header}><Link to="/new" >Add New Todo</Link></ol>
          </ul>
        </h1>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className={style.header}>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {isloading ? <p className={style.loading}>Loading...</p> :
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
            </>
          }
        />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>


  );
};




export default App;