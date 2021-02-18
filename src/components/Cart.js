import React, {useState} from 'react';
import CartItem from './CartItem'
import { Card, Button, Container, Icon} from 'semantic-ui-react'

function Cart({ itemOrders, removeItemFromCart,checkOut}) {
    // const [item, setItem]
    // const [ordered, setOrdered] = useState(false)
    // let currentItemOrders = [];
    const itemArr = itemOrders.filter((itemOrder) => itemOrder.order.checked_out === false)

    const itemList = itemArr.map((item) => {
        return <CartItem key={item.id} itemOrder = {item} item={item.item} orderStatus = {item.order.checked_out} order = {item.order} removeItemFromCart = {removeItemFromCart}/>
    }) 
    // function showCart() {
    //     currentItemOrders = itemOrders.filter((itemOrder) => itemOrder.order.checked_out === false)
    //     console.log(currentItemOrders)
    //     console.log(itemOrders)
    // }
    console.log(itemArr[0]?.item.price)
    // console.log(itemArr[0].item)
    // itemArr.reduce(())

    const totalCost = itemArr.reduce((a, b) => a + b.item.price, 0)
    console.log(totalCost)
    // console.log(itemArr[0]['item']['price'])
    // const item = itemArr.map((item)=> {return {item.item})
        // re
   

    // showCart()


    return (
        <div>
            <Container textAlign='center'>
                <h1>Cart</h1>
                <h4>Your car total is {totalCost}</h4>
            <Button onClick={checkOut} animated>
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
        </div>
    )
}

export default Cart;

{/* <div className="item" >
<img src={item.image}  width="150" height="200" alt={item.name}/>
  <h3>{item.brand}</h3>
  <h3>{item.name}</h3>
  <h3>${item.price}</h3>
<Button>Add to Cart</button>
</div> */}