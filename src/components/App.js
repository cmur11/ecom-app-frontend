import React, {useState,useEffect} from "react";
import ItemPage from "./ItemPage"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import LoginForm from "./LoginForm"
import NavBar from "./NavBar"
import Cart from './Cart'


function App() {
  // came from ItemColection.js
  const [orderId, setOrderId] = useState("")
  const [newArr, setNewArr] = useState([])
  
  function handleOrders(orders){
    console.log(orders)
    const openOrder = orders.filter((order) => order.checked_out === false)
    let addToOrder = parseInt(openOrder[0].id)
    setOrderId(addToOrder)
  }
  console.log(orderId)


  useEffect(()=> {
    fetch('http://localhost:3000/orders')
    .then(res => res.json())
    .then((orders) => handleOrders(orders))
  }, [])
  /////////////////////////////// 



//   const [user,setUser] = useState([])
  const [itemOrders, setItemOrders] = useState([]); 
//   useEffect(()=> {
//     fetch('http://localhost:3000/users')
//     .then(res => res.json())
//     .then(users => setUser(users[0]))
// }, [])

  useEffect(()=> {
    fetch('http://localhost:3000/item_orders')
    .then(res => res.json())
    .then(itemOrders => setItemOrders(itemOrders))
  }, [])

  function addToCart(newOrder){
    console.log(newOrder)
    const newArr = [...itemOrders,newOrder]
    console.log(newArr)
     setItemOrders(newArr)
  }

function removeItemFromCart(itemOrder){
  const newArr = itemOrders.filter((item) => item !== itemOrder) 
  setItemOrders(newArr)
}

function checkOut(){
  // itemOrders.map((item) => )

  fetch(`http://localhost:3000/orders/${orderId}`, {
    method: 'PATCH', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      checked_out: true
    }
    ),
  })
  .then(response => response.json())
  .then(createNewOrder);
  // (newOrder) => addToCart(newOrder)
  // console.log(itemOrders)
  setItemOrders([])
}

function createNewOrder() {
  fetch(`http://localhost:3000/orders`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: 1,
      date: 2016,
      checked_out: false
    }
    ),
  })
  .then(response => response.json())
  .then(console.log());
}



// console.log(orderId)
  return (
    <Router>
      <NavBar />
      {/* <h1> Welcome {user.email}</h1> */}
      <Switch>
          <Route exact path="/login" component={LoginForm}/>
          <Route exact path="/home" >
          <ItemPage addToCart = {addToCart} orderId={orderId}/>
          </Route>
          {/* <Route exact path="/carts"  render = {(props) => (
            <Cart {...props} itemOrders={itemOrders}/>
          )}/> */}
          <Route exact path="/carts" >
          <Cart itemOrders={itemOrders} addToCart = {addToCart} removeItemFromCart = {removeItemFromCart}checkOut = {checkOut} />
              {/* <button onClick = {checkOut}> CheckOut</button> */}
          </Route>
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
      