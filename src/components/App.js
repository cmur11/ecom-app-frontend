import React, {useState,useEffect} from "react";
import ItemPage from "./ItemPage"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import LoginForm from "./LoginForm"
import NavBar from "./NavBar"
import Cart from './Cart'
import '../App.css'


function App() {

  const [orderId, setOrderId] = useState("")
  const [newArr, setNewArr] = useState([])
  const [itemOrders, setItemOrders] = useState([]); 
  
  function handleOrders(orders){
    // console.log(orders)
    if (!orders){
      const openOrder = orders.filter((order) => order.checked_out === false)
      let addToOrder = parseInt(openOrder[0].id)
      setOrderId(addToOrder)
    }else{
      createNewOrder()
    }
  }
  console.log(orderId)


  useEffect(()=> {
    fetch('http://localhost:3000/orders')
    .then(res => res.json())
    .then((orders) => handleOrders(orders))
  }, [])
  /////////////////////////////// 





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
 
  setItemOrders([])
}

function createNewOrder() {
  fetch("http://localhost:3000/orders", {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: 5,
      date: 2021,
      checked_out: false
    }
    ),
  })
  .then(response => response.json())
  .then(newOrder => setOrderId(newOrder.id)) 
  // (newOrder) => addToCart(newOrder)


}



// console.log(orderId)
  return (
    <Router>
      <NavBar />
      
      <Switch>
          <Route exact path="/login" component={LoginForm}/>
          <Route exact path="/home" >
            <ItemPage addToCart = {addToCart} orderId={orderId}/>
          </Route>
          <Route exact path="/carts" >
            <Cart itemOrders={itemOrders} addToCart = {addToCart} removeItemFromCart = {removeItemFromCart}checkOut = {checkOut}  />
          </Route>
      </Switch>
      </Router>
  );
}

export default App;

