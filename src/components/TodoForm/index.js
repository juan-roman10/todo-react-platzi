import React, { useContext, useState } from 'react';
import { TodoContext } from "../../context";
import './TodoForm.css'

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = useState('');
    
    const { setOpenModal, addTodo } = useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    };
    

    return (
        <form onSubmit = { onSubmit }>
            <label>Crea una tarea</label>
            <textarea
            value = { newTodoValue }
            onChange = { onChange }
            placeholder='Crea una tarea...'></textarea>
            <div className='TodoForm-buttonContainer'>
                <button 
                    type='button'
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick = { onCancel }
                >
                    Cancelar
                </button>
                <button
                    className='TodoForm-button TodoForm-button--add'
                    type='submit'
                >
                    Agregar
                </button>
            </div>
        </form>
    );
}

export { TodoForm }