import React, { useContext } from "react";
import { TodoContext } from "../../context";
import './TodoSearch.css'

function TodoSearch() {

    const { searchValue, setSearchValue } = useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);        
    }

    return (
        <input
            className="TodoSearch"
            placeholder="Tarea..."
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )

}

export { TodoSearch }