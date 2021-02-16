import React, {useState} from "react";
import ItemPage from "./ItemPage"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import LoginForm from "./LoginForm"
import Header from "./Header"


function App() {


  return (
    <Router>
      <Header/>
      <Switch>
          <Route path="/login" component={LoginForm}/>
          <Route path="/home" component={ItemPage}/>
      </Switch>
      </Router>
  );
}

export default App;

/* 
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

      // const [button,setButton] = useState("") */}

 //   function getUser(users){
//     users.forEach(user => {
//         if (user.email === username){
//             renderMainMenu(username)
//         }else if (user.email !=username){
//             alert('Please reenter your credentials, email account does not exist')
//         }
//     })
      //} */}

      // <ItemPage />
      // <ItemPage />
      