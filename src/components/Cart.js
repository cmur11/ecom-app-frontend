import React, {useState} from 'react';
import CartItem from './CartItem'
import { Card, Button, Container, Icon, Header} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Checkout from "./Checkout"



function Cart({ setItemOrders,itemOrders, removeItemFromCart, checkOut}) {
    const [pay,setPay] = useState(false)
    
    if (itemOrders){
    
        const itemArr = itemOrders.filter((itemOrder) => itemOrder.order.checked_out === false)

        const itemList = itemArr.map((item) => {
            return <CartItem key={item.id} itemOrder = {item} item={item.item} orderStatus = {item.order.checked_out} order = {item.order} removeItemFromCart = {removeItemFromCart}/>
        }) 
      
       console.log(itemArr)
// debugger
       const indItem = itemArr.map((item) =>{
            return item.item.name 
       })
       console.log(indItem)

        const totalCost = itemArr.reduce((a, b) => a + b.item.price, 0)
    
        const roundedTotalCost = (Math.round(totalCost * 100) / 100)
       

        function handleCheckout(e){
            // setItemOrders([])
            setPay(true)
        }
    // if(itemOrders.length === 0){
    //     console.log("hi")
    //   return  <Header as='h1' >Your Cart is empty</Header>
    // }
    return (

        
        <div>
                 {!pay ? <>
                <Container textAlign='center'>
                <Header as='h1' >Cart</Header>
                <Header as='h3' >Your cart total is:  ${roundedTotalCost}</Header>
                    <br></br>
                    <br></br>
                <Button onClick={(e) => handleCheckout(e)} animated>
                    <Button.Content visible>Check Out</Button.Content>
                    <Button.Content hidden>
                <Icon name='check circle' />
                </Button.Content>
                </Button>
                </Container>
                <Container style={{padding: "20px"}}>
                  <Card.Group itemsPerRow={4} style={{padding: "20px"}}>
                    {itemList}
                </Card.Group>
                </Container>
                </>
                :
                
              
                <>
                    {/* <div className ="congrats">
                       <h1 className ="congrats">Order has been placed!</h1> 
                       <Link to="/home">
                       <Button>Continue Shopping?</Button>
                       </Link>
                       <br></br>
                       <br></br>
                      
                    </div> */}
                    <Checkout roundedTotalCost = {roundedTotalCost} indItem = {indItem}/>

                {/* <Elements stripe = {stripePromise}> 
                    <CheckoutForm totalCost={totalCost}/>
               
                </Elements> */}
                </>
               
            }
            </div>
        )
    }else {
        return(
            <div>
                <h1> Loading...</h1>
                {/* <Link to="/home">
                       <Button>Continue Shopping?</Button>
                </Link> */}
            </div>
        )
    }

}

export default Cart;

{/* <div className="item" >
<img src={item.image}  width="150" height="200" alt={item.name}/>
  <h3>{item.brand}</h3>
  <h3>{item.name}</h3>
  <h3>${item.price}</h3>
<Button>Add to Cart</button>
</div> */}