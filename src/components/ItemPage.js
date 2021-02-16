import React, {useState,useEffect} from "react"
import ItemCollection from "./ItemCollection"
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

    return (
        <>
        <Categories/>
        <ItemCollection items={categoriedItems}/>
        </>
    )
}
export default ItemPage;

// {loggedIn ? <Categories items = {items} category = {category} setCategory = {setCategory}/> : 
// <LoginForm renderMainMenu = {renderMainMenu} setLoggedIn = {setLoggedIn} loggedIn = {loggedIn}/>}