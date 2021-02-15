import React, {useState} from "react";
import ItemPage from "./ItemPage"
function App() {
  // const [button,setButton] = useState("")

  //   function getUser(users){
  //     users.forEach(user => {
  //         if (user.email === username){
  //             renderMainMenu(username)
  //         }else if (user.email !=username){
  //             alert('Please reenter your credentials, email account does not exist')
  //         }
  //     })
        //}
  
 


  return (
  <header className = "App Name">
    <h1> Our App Name</h1>

    <div className="App">
      
     <ItemPage />
     {/* <RegisterForm/> */}
  
     </div>
     </header>
    
      
      /* <header className="App-header">
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
      </header> */
  );
}

export default App;
