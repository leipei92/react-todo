import React from 'react';

const AddTodoForm = (props) => {
  const handleAddTodo = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = document.getElementById('todoTitle');
    const todoTitle = title.value;
    console.log(todoTitle);
    props.onAddTodo(todoTitle);
    form.reset();

  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle" > Title </label>
      <input id="todoTitle" type="text" name="title" />
      <button type="submit"> Add </button>
    </form>

  )

}

export default AddTodoForm;