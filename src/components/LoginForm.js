import React, {useState} from "react";

function LoginForm(){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  console.log(username)
  console.log(password)
//   function handleSubmit(e){
// e.preventDefault
//   }
    return(
   
    <form className = "Login Form">
      <input onChange = {(e) => setUsername(e.target.value)} value = {username} type = "text" placeholder = "Email"/> 
      <input onChange = {(e) => (setPassword(e.target.value))} value = {password}type = "text" placeholder = "Password"/>
      <button  type= "submit"> Login </button>
    </form>
    )

  }
  export default LoginForm