import React, {useState} from "react";
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

function App() {
  const [button,setButton] = useState("")

  return (
    <div className="App">
      <div className = "sidebar">
     <LoginForm/>
     {/* <RegisterForm/> */}
  
      </div>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
