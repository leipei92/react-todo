import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';



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
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isloading ? <p>Loading...</p> :
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
    </>
  );
};




export default App;