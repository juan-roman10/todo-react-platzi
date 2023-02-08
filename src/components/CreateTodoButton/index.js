import React, { useContext } from "react";
import { TodoContext } from "../../context";
import './CreateTodoButton.css'

function CreateTodoButton() {
    const { setOpenModal } = useContext(TodoContext)

    const onClickButton = () => {
        setOpenModal(prevState => !prevState);
    }
    return (
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export { CreateTodoButton }