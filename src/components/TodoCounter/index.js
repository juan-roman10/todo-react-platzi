import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../context";
import './TodoCounter.css'

function TodoCounter() {

    const { totalTodos, completedTodos } = useContext(TodoContext);

    useEffect(() => {
        if (totalTodos - completedTodos > 0) {
            document.title = `${ totalTodos - completedTodos } ${totalTodos - completedTodos === 1 ? 'tarea pendiente' : 'tareas pendientes'}`
        } else {
            document.title = `No hay tareas pendientes`
        }
    }, [totalTodos, completedTodos])
    
    return (
        <h2 className="TodoCounter">
            Haz completado { completedTodos } de { totalTodos } tareas
        </h2>
    )
}

export { TodoCounter }