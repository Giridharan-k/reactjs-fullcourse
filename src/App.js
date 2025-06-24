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

  const removeTodo = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  return (
    <div>
      <Header onAdd={addTodo}/>
      <Todolist todos={todoList} onRemove={removeTodo}/>
      <Footer/>
    </div>
  );
}

export default App;
