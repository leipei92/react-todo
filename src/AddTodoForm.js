import React from 'react';
import InputWithLabel from './InputWithLabel';

const AddTodoForm = ({ onAddTodo }) => {

  const [todoTitle, setTodoTitle] = React.useState('');

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (!todoTitle) {
      throw new Error("Can't be empty")
    }
    onAddTodo({
      title: todoTitle,
      id: Date.now()
    });

    setTodoTitle('');

  }

  return (

    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        id="todoTitle"
        value={todoTitle}
        type="text"
        onChange={handleTitleChange}
      >
        <strong>Title:</strong>
      </InputWithLabel>
      <button type="submit"> Add </button>
    </form>

  )

}

export default AddTodoForm;
