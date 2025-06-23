
import './App.css';
import { useState } from 'react';

function App() {
const [email,setEmail] = useState('');
const [password, setPassword]=useState('');



  return (
    <div>
      <h2>Login form</h2>
      <form>
    <div>
      <label>Email: </label>
      <input type="email"
      value={email}
      onChange={(e)=> setEmail(e.target.value)}required
      />
    </div>
    <div>
      <label>Password: </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    </div>

    <button type="submit"> Submit</button>
       </form>

       <div>
        <h3>Entered Details:</h3>
        <p><strong>Email:</strong>{email}</p>
        <p><strong>Password:</strong>{password}</p>
       </div>
    </div>
   
  );
}

export default App;
