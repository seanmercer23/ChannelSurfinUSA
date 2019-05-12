import React from 'react';
import {Link} from 'react-router-dom'

// This component handles our register form
const Register = (props) => {

  return (
    <div className="register fade-in">
      <form className="loginForm" onSubmit={props.handleRegister} >
        <input placeholder="username" name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <input placeholder="password" name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <input placeholder="bio" name="bio" type="text" value={props.formData.bio} onChange={props.handleChange} />
        <input placeholder="pic" name="pic" type="text" value={props.formData.pic} onChange={props.handleChange} />
        <button className="loginButton">Register</button>
        <br />
        <Link to="/login"><button className="registerButton">Login</button></Link>
      </form>
    </div>
  );
}

export default Register;
