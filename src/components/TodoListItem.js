import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from 'prop-types';

function TodoListItem({ todo, onRemoveTodo }) {
    return (
        <li className={style.ListItem}>{todo.title} <button onClick={() => onRemoveTodo(todo.id)} className={style.button}>Remove</button></li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.func.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem