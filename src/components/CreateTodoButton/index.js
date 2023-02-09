import React, { useContext } from "react";
import { TodoContext } from "../../context";
import { AiOutlinePlus } from "react-icons/ai";
import './CreateTodoButton.css'

function CreateTodoButton() {
    const { setOpenModal } = useContext(TodoContext)

    const onClickButton = () => {
        setOpenModal(prevState => !prevState);
    }
    return (
        <AiOutlinePlus 
            className="CreateTodoButton"
            onClick={onClickButton}
        />
    )
}

export { CreateTodoButton }