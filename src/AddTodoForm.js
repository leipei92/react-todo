import React from 'react';

const AddTodoForm = (props) => {
  const handleAddTodo = (event) => {
    event.preventDefault();
    const searchForm = event.target;
   
    const todoTitle = searchForm.title.value;
    console.log(todoTitle);
    props.onAddTodo(todoTitle);
    searchForm.reset();

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