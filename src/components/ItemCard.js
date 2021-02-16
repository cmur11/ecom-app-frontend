// import { Card } from "semantic-ui-react";

function ItemCard({item}){
 // console.log(item)
  return(
    // <Card>
    <div className="item" >
        <img src={item.image}  width="150" height="200" alt={item.name}/>
          <h3>{item.brand}</h3>
          <h3>{item.name}</h3>
          <h3>${item.price}</h3>
      <button>Add to Cart</button>
    </div>
//   </Card>
  )
}

export default ItemCard;