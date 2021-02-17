// import { Card } from "semantic-ui-react";
import React, {useState} from "react"
function CartItem({item,order,orderStatus, itemOrder, removeItemFromCart}){
   const [checkedOut, setCheckedOut] = useState(order.checked_out)

    function handleCheckout(){
      // setCheckedOut(!checkedOut)
      console.log(order)

      // fetch(`http://localhost:3001/order/${order.id}`, {
      //   method: 'PATCH',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     checkedOut: (true),
      //   }
      //   ),
      // })
      // .then(response => response.json())
      // .then(data => {
      //   setLikes([newLikeCount]);
      // })
      
    }
    // console.log(checkedOut)
    // console.log(ordered)

    // console.log(itemOrder)
    //  console.log(itemOrder.id)
    function handleRemove(){

        // console.log(itemOrder.id)}
      fetch(`http://localhost:3000/item_orders/${itemOrder.id}` , {
        method: 'DELETE',
      })
    removeItemFromCart(itemOrder)
    }

     return(
       // <Card>
       <div className="item" >
           <img src={item.image}  width="150" height="200" alt={item.name}/>
             <h3>{item.brand}</h3>
             <h3>{item.name}</h3>
             <h3>${item.price}</h3>
         {/* <button onClick = {handleCheckout}>Checkout</button> */}
         <button onClick = {handleRemove}>Remove From Cart</button>
       </div>
   //   </Card>
     )
   }
   
   export default CartItem;