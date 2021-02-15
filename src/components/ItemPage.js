import React, {useState,useEffect} from "react"
import RegisterForm from "./RegisterForm"
import ItemCollection from "./ItemCollection"
import LoginForm from "./LoginForm"
import Categories from "./Categories"

function ItemPage(){
    const [items, setItems] = useState([])
    const [sidebar, setSidebar] = ['']
    const [category, setCategory] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(()=> {
        fetch('http://localhost:3000/items')
        .then(res => res.json())
        .then(setItems)
      }, [])

      console.log(loggedIn)

    function renderMainMenu(currentUser){
        console.log(currentUser)

    }

    const categoriedItems = items.filter(item => item.category.includes(category))
console.log(categoriedItems)



console.log(category)
    return (
        <div className = "Item Container">
            <div className="ItemCard">
            <div className = "sidebar">
            {loggedIn ? <Categories items = {items} category = {category} setCategory = {setCategory}/> : 
            <LoginForm renderMainMenu = {renderMainMenu} setLoggedIn = {setLoggedIn} loggedIn = {loggedIn}/>}
              {/* <LoginForm renderMainMenu = {renderMainMenu} setLoggedIn = {setLoggedIn} loggedIn = {loggedIn}/> */}
      
            </div>
            {/* //render categories */}
             {/* <div className = "categories">
                 <Categories items = {items} category = {category} setCategory = {setCategory}/>
             </div> */}
            <div className = "ItemColleciton">
                <ItemCollection items = {categoriedItems}/>
            </div>
        </div>


     </div>
    )
}
export default ItemPage;