import React, { useState } from 'react';
import './Header.css';

function Header({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddClick = () => {
    onAdd(inputValue);
    setInputValue('');
  };

  return (
    <nav className="navbar">
      <div className="logo">Todo App</div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddClick}>Add</button>
      </div>
    </nav>
  );
}

export default Header;
