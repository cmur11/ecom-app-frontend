import { getSuggestedQuery } from "@testing-library/react";
import React, {useState,useEffect} from "react";

function LoginForm({renderMainMenu,loggedIn, setLoggedIn}){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
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
    return(

    <form onSubmit = {handleSubmit}className = "Login Form">
      <input onChange = {(e) => setUsername(e.target.value)} value = {username} type = "text" placeholder = "Email"/> <br></br>
      <input onChange = {(e) => (setPassword(e.target.value))} value = {password}type = "password" placeholder = "Password"/>
      <button type= "submit"> Login </button>
    </form>) 
  

  }
  export default LoginForm