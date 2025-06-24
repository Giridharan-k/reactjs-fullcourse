import React from 'react'
import './todolist.css';

function Todolist({ todos, onRemove}) {
  return (
    <div>
       <div className="body">
      <h2>My Todo List</h2>
      <ul className='todo-item'>
        {todos.map((item, index) => (
            <div key={index}>
                <input type="checkbox" value={item} />
                <span>{item}</span>
                <button className='remove-btn' onClick={()=> onRemove(index)}>Remove</button>
            </div>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Todolist;
