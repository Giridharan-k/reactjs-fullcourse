import React, { useState } from 'react';
import Header from './workout/Header';
import Footer from './workout/Footer';
import Todolist from './Todolist';


function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newItem) => {
    if (newItem.trim() !== '') {
      setTodoList([...todoList, newItem]);
    }
  };

  return (
    <div>
      <Header onAdd={addTodo}/>
      <Todolist todos={todoList}/>
      <Footer/>
    </div>
  );
}

export default App;
