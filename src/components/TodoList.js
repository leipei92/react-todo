import React from 'react';
import TodoListItem from './TodoListItem';
import style from './TodoList.module.css';
import PropTypes from 'prop-types'


const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <ul className={style.list}>
      {todoList.map(function (item) {
        return <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} />
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    createdTime: PropTypes.string.isRequired
  }),),
  onRemoveTodo: PropTypes.func.isRequired,

};

export default TodoList;
