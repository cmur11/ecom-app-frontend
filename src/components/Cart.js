import React, {useState} from 'react';
import CartItem from './CartItem'

function Cart({ itemOrders }) {
    
    // let currentItemOrders = [];
    const itemArr = itemOrders.filter((itemOrder) => itemOrder.order.checked_out === false)
    const itemList = itemArr.map((item) => {
        return <CartItem key={item.id} item={item.item}/>
    }) 
    // function showCart() {
    //     currentItemOrders = itemOrders.filter((itemOrder) => itemOrder.order.checked_out === false)
    //     console.log(currentItemOrders)
    //     console.log(itemOrders)
    // }
    console.log(itemList)

    // showCart()

    
    return (
        <div>
            <h1>Cart</h1>
            <ul>{itemList}</ul>
        </div>
    )
}

export default Cart;

{/* <div className="item" >
<img src={item.image}  width="150" height="200" alt={item.name}/>
  <h3>{item.brand}</h3>
  <h3>{item.name}</h3>
  <h3>${item.price}</h3>
<button>Add to Cart</button>
</div> */}