import React from "react";
import style from "./TodoListItem.module.css";

function TodoListItem({ todo, onRemoveTodo }) {
    return (
        <li className={style.ListItem}>{todo.title} <button onClick={() => onRemoveTodo(todo.id)} className={style.button}>Remove</button></li>
    )
}
export default TodoListItem