import React from "react";
import '../estilos/ToDoItem.css';

function ToDoItem(props) {
    return (
        <li className="ToDoItem">
            <span className={`Icon Icon-check ${props.completed && 'icon-check-active'}`}>
            ᄼ
            </span>
            <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p-completed'}`}>
            {props.text}
            </p>
            <span className="Icon Icon-delete">
            X
            </span>
        </li>
    )
}

export { ToDoItem };