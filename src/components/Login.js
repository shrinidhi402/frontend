import React, { useState } from "react";
import "./Login.css";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      setEmail("");
      setPassword("");
      alert("login successful");
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Email Id</label>
        <input type="text" value={email}
        onChange={e => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} 
         onChange={e => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
