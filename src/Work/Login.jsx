import { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
    alert("Password is updated");
  };

  return (
    <div className="main">
      <h2>Login form</h2>
      <form className="main1" onSubmit={handleSubmit}>
        <div className='input-layout'>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      
      {submitted && (
        <div className="main2">
          <h3>Entered Details:</h3>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Password:</strong> {password}</p>
        </div>
    
      )}
    </div>
  );
}

export default Login;
