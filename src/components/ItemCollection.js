import ItemCard from "./ItemCard"

function ItemCollection({items, user}){
    // console.log(items)
    const indItem = items.map((item) => {
        return(
          <ItemCard item = {item} user = {user} key = {item.id}/>
        )
      })
      
      // console.log(user)

    return(
        <div id="onetem">
      {indItem}
    </div>
    
      
    //    "itemCollection"
    )
    
}
export default ItemCollection;