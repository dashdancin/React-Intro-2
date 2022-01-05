import React from 'react';
import {ToDoItem} from './components/ToDoItem';
import {ToDoCounter} from './components/ToDoCounter';
import {ToDoList} from './components/ToDoList';
import {ToDoSearch} from './components/ToDoSearch';
import {CreateToDoButton} from './components/CreateToDoButton';


const todos = [
  { text: 'Cortar pan', completed: true},
  { text: 'Tomar el curso de intro a React', completed: false},
  { text: 'Llorar con la llorona', completed: false},
];

function App() {
  return (
    <>
      {<ToDoCounter/>}
      {<ToDoSearch/>}
      <ToDoList>
        {todos.map(todo =>(
        <ToDoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        /> 
        ))} 
      </ToDoList>
      <CreateToDoButton/>
      <button>+</button>
    </>
  );
}

export default App;