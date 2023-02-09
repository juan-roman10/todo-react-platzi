import React from "react";
import './TodoItem.css'
import { AiOutlineCheckCircle, AiFillCloseCircle } from "react-icons/ai";

function TodoItem({ text, completed, onComplete, onDelete }) {

    return (
        <li className="TodoItem">
            <AiOutlineCheckCircle
                className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
                onClick={onComplete}
            />
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                {text}
            </p>
            <AiFillCloseCircle 
                className="Icon Icon-delete"
                onClick={onDelete}
            />
        </li>
    )
}

export { TodoItem }