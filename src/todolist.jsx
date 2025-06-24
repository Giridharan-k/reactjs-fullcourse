import React from 'react'
import './todolist.css';

function Todolist({ todos}) {
  return (
    <div>
       <div className="body">
      <h2>My Todo List</h2>
      <ul>
        {todos.map((item, index) => (
            <div key={index}>
                <input type="checkbox" value={item} />{item}
            </div>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Todolist;
