import React from "react";

function Login() {
  function handleFormSubmit(event) {
    event.preventDefault();

    const userDate = {
        username: event.target.username.value
    }
    alert(JSON.stringify(userDate))
    console.log(event.target)
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
