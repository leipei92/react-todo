import React from 'react';
import style from "./TodoContainer.module.css";
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';



const AIRTABLE_API_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

function TodoContainer({ REACT_APP_TABLE_NAME }) {
    const [todoList, setTodoList] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isAscending, setIsAscending] = React.useState(true);
    const [sortField, setSortField] = React.useState('createdTime');

    const fetchData = React.useCallback(async () => {
        const options = {
            method: 'GET',
            headers: { Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}` }
        }
        const sortDirection = isAscending ? 'asc' : 'desc';
        const AIRTABLE_API_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=${sortDirection}`;

        try {
            const response = await fetch(AIRTABLE_API_URL, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            const todos = data.records.map((todo) => {
                return { title: todo.fields.title, id: todo.id, createdTime: todo.createdTime }
            });
            setTodoList(todos);
            setIsLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    }, [isAscending, sortField]);

    React.useEffect(() => {
        fetchData();
    }, [REACT_APP_TABLE_NAME, isAscending, fetchData]);

    const toggleSortOrder = () => {
        setIsAscending((prevIsAscending) => !prevIsAscending);
    };

    const toggleSortByTime = (field) => {
        if (field === sortField) {
            setIsAscending((prevIsAscending) => !prevIsAscending);
        } else {
            setSortField(field);
            setIsAscending(true);
        }
    };

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
                    createdTime: airtableData.fields.createdTime
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
    };






    return (
        <div className={style.container}>
            <h1 className={style.header}>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />

            <button className={style.toggleButton} onClick={toggleSortOrder}>Sort by Ascending/Descending</button>


            <button className={style.toggleButton} onClick={() => toggleSortByTime('createdAt')}>
                Sort by Created Time
            </button>


            {isLoading ? (
                <p className={style.loading}>Loading...</p>
            ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />

            )}
        </div>
    );

}

export default TodoContainer;

