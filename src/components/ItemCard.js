import { Card, Button, Icon,  Image} from 'semantic-ui-react'
import '../App.css'

function ItemCard({item,orderId, addToCart}){
 // console.log(item)
//  console.log(orderId)
// debugger
function handleAddToCart(){
  // console.log(item.id)
  // console.log(orderId)


   
 

  fetch("http://localhost:3000/item_orders", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      order_id: orderId,
      item_id: item.id,
    }
    ),
  })
  .then(response => response.json())
  .then(newOrder => addToCart(newOrder));
  // (newOrder) => addToCart(newOrder)

}

  return(
      <Card>
          <Card.Content >
            <Image src={item.image} height='150' width='150' alt={item.name}/>
            <br></br>
            <br></br>
            <Card.Header>{item.brand}</Card.Header>
            <br></br>
            <Card.Meta>{item.name}</Card.Meta>
            <br></br>
            <Card.Description>${item.price}</Card.Description>
          </Card.Content>
          
          <Button onClick={handleAddToCart} animated>
            <Button.Content visible>Add to Cart</Button.Content>
            <Button.Content hidden>
              <Icon name='plus cart' />
            </Button.Content>
          </Button>
      </Card>
  )
}

export default ItemCard;