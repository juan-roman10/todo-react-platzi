import React from 'react';
import { TodoProvider } from "../../context";
import { AppUI } from './AppUI';
// import './App.css';

// const defaultTodos = [
//   { text: 'Comprar', completed: false },
//   { text: 'Cocinar', completed: true },
//   { text: 'Dormir', completed: false },
// ]

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
