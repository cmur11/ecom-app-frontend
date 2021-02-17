// import { Card } from "semantic-ui-react";

function ItemCard({item,orderId, addToCart}){
 // console.log(item)
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
    // <Card>
    <div className="item" >
        <img src={item.image}  width="150" height="200" alt={item.name}/>
          <h3>{item.brand}</h3>
          <h3>{item.name}</h3>
          <h3>${item.price}</h3>
      <button onClick ={handleAddToCart}>Add to Cart</button>
    </div>
//   </Card>
  )
}

export default ItemCard;