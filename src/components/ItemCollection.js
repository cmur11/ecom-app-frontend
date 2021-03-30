import ItemCard from "./ItemCard"
import React, {useState,useEffect} from "react"
import { Container, Card } from 'semantic-ui-react'
function ItemCollection({items, user, addToCart, orderId}){
  
    const indItem = items.map((item) => {
        return(
          <ItemCard item = {item} user = {user} key = {item.id} orderId = {orderId} addToCart = {addToCart}/>
        )
      })
      
      // console.log(user)

    return(
            <Container style={{padding: "20px"}}>
              <Card.Group itemsPerRow={4} style={{padding: "20px"}}>
              {indItem}
              </Card.Group>
            </Container>

    
      
    //    "itemCollection"
    )
    
}
export default ItemCollection;