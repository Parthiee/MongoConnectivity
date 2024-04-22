import './App.css';
import React, { useState } from "react";

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function getData() {
    try {
      let res = await fetch('http://localhost:5000/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Corrected the header name
        },
        body: JSON.stringify({ // Converted body to JSON string
          username: username,
          password: password
        })
      });

      let message = await res.json();
      console.log(message);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /> <br/>
      Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br/>
      <button style={{ height: 50, width: 50 }} onClick={getData}>Submit</button> 
    </div>
  );
}

export default App;
