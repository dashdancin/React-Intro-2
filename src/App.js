import React from 'react';
import {ToDoItem} from './components/ToDoItem';
import {ToDoCounter} from './components/ToDoCounter';
import {ToDoList} from './components/ToDoList';
import {ToDoSearch} from './components/ToDoSearch';
import {CreateToDoButton} from './components/CreateToDoButton';


const todos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el curso de intro a React', completed: false},
  { text: 'Llorar con la llorona', completed: false},
];

function App() {
  return (
    <div>
      {<ToDoCounter/>}
      {<ToDoSearch/>}
      <input placeholder="Cebolla" />
      <ToDoList>
        {todos.map(todo => (
        <ToDoItem key={todo.text} text={todo.text}/> 
        ))} 
      </ToDoList>
      <CreateToDoButton/>
      <button>+</button>
    </div>
  );
}

export default App;