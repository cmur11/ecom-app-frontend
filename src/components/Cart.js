import React, {useState} from 'react';
import CartItem from './CartItem'
import { Card, Button, Container, Icon, Header} from 'semantic-ui-react'
import Payment from "./Payment"

function Cart({ itemOrders, removeItemFromCart, checkOut}) {
    const [pay,setPay] = useState(false)
    console.log(itemOrders)
    if (itemOrders){
        // if {}
        const itemArr = itemOrders.filter((itemOrder) => itemOrder.order.checked_out === false)

        const itemList = itemArr.map((item) => {
            return <CartItem key={item.id} itemOrder = {item} item={item.item} orderStatus = {item.order.checked_out} order = {item.order} removeItemFromCart = {removeItemFromCart}/>
        }) 
      
       
    
        const totalCost = itemArr.reduce((a, b) => a + b.item.price, 0)
    
        const roundedTotalCost = (Math.round(totalCost * 100) / 100)
       
    
    // onClick={checkOut} 
        return (
            <div>
                 {!pay ? <>
                <Container textAlign='center'>
                <Header as='h1' color="grey">Cart</Header>
                <Header as='h3' color="grey">Your cart total is:  ${roundedTotalCost}</Header>
                    <br></br>
                    <br></br>
                <Button onClick={() => setPay(true)} animated>
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
                : <Payment checkout = {checkOut} />
            }
            </div>
        )
    }else {
        return(
            <div>
                Loading...
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