import React from "react";
import { useState } from "react";

function Login() {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  const [data, setData] = useState({userName: '', password: ''})

  function handleFormSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(data));
    console.log(event.target);
    console.log(data)
  }
  function handleInputChange(e, name) {
    setData({...data, [name]: e.target.value})
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.userName}
            onChange={(e) => handleInputChange(e, 'userName')}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange(e, 'password')}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
