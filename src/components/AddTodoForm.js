import React from 'react';
import InputWithLabel from './InputWithLabel';
import style from './AddTodoForm.module.css';
import PropTypes from 'prop-types';


const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = React.useState('');

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  const handleAddTodo = (event) => {
    event.preventDefault();

    if (!todoTitle) {
      alert("Can't be empty!");
      return
    }

    onAddTodo({
      title: todoTitle,
      id: Date.now()
    });
    setTodoTitle('');
  }

  return (
    <form onSubmit={handleAddTodo} className={style.form}>
      <InputWithLabel
        name="appTodo"
        id="todoTitle"
        value={todoTitle}
        type="text"
        onChange={handleTitleChange}
      >
        <strong>Title:</strong>
      </InputWithLabel>
      <button type="submit" className={style.btn}> Add </button>
    </form>
  )
}


AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};


export default AddTodoForm;
