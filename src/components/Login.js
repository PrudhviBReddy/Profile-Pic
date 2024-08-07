import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let navigate = useNavigate();


    useEffect(()=>{
      emailInputRef.current.value = localStorage.getItem("email");
      passwordInputRef.current.value = localStorage.getItem("password");
      if(localStorage.getItem("email") && localStorage.getItem("password")){
          onLoginClick();
      }
  },[]);


  let onLoginClick = ()=>{
      let typedEmail = emailInputRef.current.value;
      let typedPassword = passwordInputRef.current.value;
      if(typedEmail == "prudhvi@gmail.com" && typedPassword == "Prudhvi"){
          localStorage.setItem("email",emailInputRef.current.value);
          localStorage.setItem("password",passwordInputRef.current.value);
          navigate("/Homepage");
      }else{
          alert("Invalid username/password");
      }
  }

  return (
    <div className='App'>
        <form>
        <h1>LOGIN</h1>
       <div>
         <label>Email</label>
         <input ref={emailInputRef} type='text'></input>
       </div>
        <div>
          <label>Password</label>
          <input ref={passwordInputRef} type='text'></input>
        </div> 
        <button type='button' onClick={()=>{ 
           onLoginClick();
        }}>LOGIN</button> 
        </form>
        <br></br>
        <p>Don't have account?<Link to="/signup">Signup</Link></p>
    </div>

  )
}

export default Login