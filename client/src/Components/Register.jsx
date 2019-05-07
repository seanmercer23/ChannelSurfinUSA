import React from 'react';

// This component handles our register form
const Register = (props) => {

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <button onClick={props.handleLogout}>Logout</button>
      <hr />
      <form onSubmit={props.handleRegister} >
        <p>Username:</p>
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <p>Password:</p>
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <p>Bio:</p>
        <input name="bio" type="text" value={props.formData.bio} onChange={props.handleChange} />
        <p>Picture:</p>
        <input name="pic" type="text" value={props.formData.pic} onChange={props.handleChange} />
        <hr/>
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
