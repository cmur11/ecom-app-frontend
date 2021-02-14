
import React, {useState} from "react"

function RegisterForm(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
        console.log(email)
        console.log(password)
    return(


    <form className = "Registration Form">
    <input onChange = {(e) => setEmail(e.target.value)}type = "text" value = {email} placeholder = "Email"/> 
    <input onChange = {(e) => (setPassword(e.target.value))}type = "text" value = {password} placeholder = "Password"/>
    <button type= "submit"> Create User </button>
  </form>
    )
}

export default RegisterForm