import { getSuggestedQuery } from "@testing-library/react";
import React, {useState,useEffect} from "react";

function LoginForm({renderMainMenu}){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loggedIn, setLoggedIn] = useState(true)
  // console.log(password)

// function renderMainMenu(username){
//     console.log(username)
// }

  function handleSubmit(e){
    e.preventDefault()
    // console.log("hi")
  
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(users => getUser(users))


    // function handleLogin(){
    //   setLoggedIn(false)
    // }

    function getUser(users){
        users.forEach(user => {
            if (user.email === username){
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