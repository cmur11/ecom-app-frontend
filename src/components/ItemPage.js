import React, {useState,useEffect} from "react"
import RegisterForm from "./RegisterForm"
import ItemCollection from "./ItemCollection"
import LoginForm from "./LoginForm"


function ItemPage(){
    const [items, setItems] = useState([])
    const [sidebar, setSidebar] = ['']
    useEffect(()=> {
        fetch('http://localhost:3000/items')
        .then(res => res.json())
        .then(setItems)
      }, [])

    //   console.log(items)

    function renderMainMenu(currentUser){
        console.log(currentUser)

    }



    return (
        <div className = "Item Container">
        <div className="ItemCard">
          <div className = "sidebar">
             {/* // if logged in = false */}
         <LoginForm renderMainMenu = {renderMainMenu}/>
         {/* //render categories */}
          </div>
        <div className = "ItemColleciton">
            <ItemCollection items = {items}/>
        </div>
        </div>


     </div>
    )
}
export default ItemPage;