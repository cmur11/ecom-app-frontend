import { getSuggestedQuery } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import '../components/css/login.css';


function LoginForm({renderMainMenu,loggedIn, setLoggedIn}){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [formH1, setFormH1] = useState(true)
  // const [loggedIn, setLoggedIn] = useState(false)
 

  function handleSubmit(e){
    e.preventDefault()
    // console.log("hi")
  
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(users => getUser(users))

    // function handleSubmit(){
    //   setLoggedIn(true)
    //   renderMainMenu(user)
    // }

    function getUser(users){
        users.forEach(user => {
            if (user.email === username){
                setLoggedIn(true)
                renderMainMenu(user)
            }
            // else {
            //     alert('Please reenter your credentials, email account does not exist')
            //     LoginForm()
            // }
        })
    }
  }


  function handleFormH1() {
    setFormH1(!formH1)
  }

    return (
      <div className="login">
        {formH1 ? <h1>Sign In</h1> : <h1>Sign Up</h1>}
          <h4 onClick={handleFormH1}>New User? Click Me!</h4>
        <form 
          className="login-form"
          onSubmit={handleSubmit}>
            <input 
              type="text"
              value={username}
              id="username"
              placeholder="Email"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              value={password}
              id="password"
              placeholder="Password" 
              onChange={(e) => (setPassword(e.target.value))} 
            />
          <button 
            type="submit"
            class="login-button">Login</button>
        </form>
    </div>
    ) 
  

  }
  export default LoginForm

