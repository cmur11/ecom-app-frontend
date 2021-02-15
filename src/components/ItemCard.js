// import { Card } from "semantic-ui-react";

function ItemCard({item}){
 // console.log(item)
  return(
    // <Card>
    <div className = "item" >
      <div className="image">
        <img src = {item.image}  width="150" height="200"alt="item image!" />
      </div>
      <div className="content">
        <div className="header">{item.name}</div>
      </div>
      <div className="extra content">
        <span>
          <i className="item price" />
          {item.price}
        </span><br></br>
        <span>
          <i className="item brand" />
          {item.brand}
        </span>
      </div>
      <button> Add to Cart</button>
    </div>
//   </Card>
  )
}

export default ItemCard;