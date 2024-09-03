import React, { useState } from 'react';
import "./Login.css";
import {Link,Navigate,useHistory} from "react-router-dom";

const Login = () =>{
  return (
    <section className='login'>
      <div className='login'>
        <div className='login_container'>
          <h2>Sign up or Log in</h2>
          <form>
          <h5>E-mail</h5>
          <input className="but" type="text" />
          <h5>Password</h5>
          <input className="but" type="password"/>
          {/* <button onClick={login} type="submit" className='login_sign_but'>Sign In</button> */}
          <p>hjkafhukwfhwjhdklairiowqrulqwhdflawhfefuei</p>
          {/* <button onClick={register} className='but'>Create a new Account</button> */}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
