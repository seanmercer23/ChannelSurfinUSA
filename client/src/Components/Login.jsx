import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {

  return (
    <div className="login fade-in">
      <form className="loginForm" onSubmit={(e) => {
        e.preventDefault()
        props.handleLogin()}} >
        <input className="loginField" placeholder="username" name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <input className="loginField" placeholder="password" name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button className="loginButton">Login</button>
        <br />
        <Link to="/register"><button className="registerButton">Register</button></Link>
      </form>
    </div>
  )
}

export default Login;
