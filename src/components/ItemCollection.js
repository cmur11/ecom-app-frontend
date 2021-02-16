import ItemCard from "./ItemCard"

function ItemCollection({items}){
    // console.log(items)
    const indItem = items.map((item) => {
        return(
          <ItemCard item = {item} key = {item.id}/>
        )
      })
      

    return(
        <div id="onetem">
      {indItem}
    </div>
      
    //    "itemCollection"
    )
    
}
export default ItemCollection;