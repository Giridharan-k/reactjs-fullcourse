import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const UserName = "Aditya Prabhu";
  const Password = "094576768";

  function onSubmit () {
    alert("on submit clicked")
  }

  
  return (
    <React.Fragment>
      <div style={{marginRight:'10%'}}>
        <b>UserName</b> : {UserName}
      </div>
      <div>
        <b>Password</b> : {Password}
      </div>
      <div>
        <input type='button' value="Submit" onClick={onSubmit} /> 
      </div>
    </React.Fragment>
  );
}

export default App;
