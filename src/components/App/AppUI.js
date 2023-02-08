import React, { useContext } from "react";
import { TodoContext } from "../../context";
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { Modal } from '../Modal'
import { CreateTodoButton } from '../CreateTodoButton'

function AppUI() {

    const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal } = useContext(TodoContext);
    
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                { error && <p>Hubo un error...</p> }
                { loading && <p>Loading...</p> }
                { (!loading && !searchedTodos.length) && <p>Crea tu primer tarea!</p> }

                { searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete = { () => completeTodo(todo.text) }
                    onDelete = { () => deleteTodo(todo.text) }
                />
                ))}
            </TodoList>
            
            {!!openModal && (<Modal><p>{searchedTodos[0]?.text}</p></Modal>)}

            <CreateTodoButton />
        </React.Fragment>
    )
}

export { AppUI }