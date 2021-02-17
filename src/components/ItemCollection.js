import ItemCard from "./ItemCard"
import React, {useState,useEffect} from "react"
function ItemCollection({items, user, addToCart, orderId}){
    // const [orderId, setOrderId] = useState("")
    // const [newArr, setNewArr] = useState([])
    
    // function handleOrders(orders){
    //   console.log(orders)
    //   const openOrder = orders.filter((order) => order.checked_out === false)
    //   let addToOrder = parseInt(openOrder[0].id)
    //   setOrderId(addToOrder)
    // }
    // console.log(orderId)


    // useEffect(()=> {
    //   fetch('http://localhost:3000/orders')
    //   .then(res => res.json())
    //   .then((orders) => handleOrders(orders))
    // }, [])


    const indItem = items.map((item) => {
        return(
          <ItemCard item = {item} user = {user} key = {item.id} orderId = {orderId} addToCart = {addToCart}/>
        )
      })
      
      // console.log(user)

    return(
        <div id="onetem">
      {indItem}
    </div>
    
      
    //    "itemCollection"
    )
    
}
export default ItemCollection;