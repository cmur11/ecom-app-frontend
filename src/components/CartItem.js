import React, {useState} from "react"
import { Card, Button, Icon, Image } from 'semantic-ui-react'


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
      <Card>
          <Card.Content>
            <Image src={item.image} height='150' width='150' alt={item.name}/>
            <br></br>
            <br></br>
            <Card.Header>{item.brand}</Card.Header>
            <br></br>
            <Card.Meta>{item.name}</Card.Meta>
            <br></br>

            <Card.Description>${item.price}</Card.Description>
          </Card.Content>

          <Button onClick={handleRemove} animated>
            <Button.Content visible>Remove From Cart</Button.Content>
            <Button.Content hidden>
              <Icon name='cart arrow down' />
            </Button.Content>
          </Button>
      </Card>
     )
   }
   
   export default CartItem;


//    <Card>
//    <Image src={item.image}  width="150" height="200" alt={item.name}/>
//    <Card.Content>
//      <Card.Header>{item.brand}</Card.Header>
//      <Card.Meta>{item.name}</Card.Meta>
//      <Card.Description>${item.price}</Card.Description>
//          <Button content='Set focused' onClick={handleRemove}>Remove From Cart</Button>
//    </Card.Content>
// </Card>