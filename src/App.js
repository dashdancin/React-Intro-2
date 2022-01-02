import React from "react";

// {const todos = [
//   { text: 'Cortar cebolla', completed: false},
//   { text: 'Tomar el curso de intro a React', completed: false},
//   { text: 'Llorar con la llorona', completed: false},
// ];}

function App() {
  return (
    <div>
      {/* {<ToDoCounter/>} */}
      <h2>Has completado 2 de 3 ToDos</h2>
      {/* {<ToDoSearch/>} */}
      <input placeholder="Cebolla" />
      {/* {<ToDoList>
        {todos.map(todo => (
        <ToDoItem/> 
        ))} 
      </ToDoList>} */}
      {/* {<CraeteToDoButton/>} */}
      <button>+</button>
    </div>
  )
}

export default App;