import React, {useState} from "react"

function Categories({ category, setCategory }) {
    // const [category, setCategory] = useState("")
    //  console.log(category)

    function handlePants(){
        setCategory("Pants")
        // filterCategory("Pants")
    }

    function handleShirts(){
        setCategory("Shirt")
        // filterCategory("Shirts")
    }

    function handleShoes(){
        setCategory("Shoes")
        // filterCategory("Shoes")
    }
    return(
        <div id="category-buttons">
            <button onClick={handlePants}>Pants </button>
            <button onClick={handleShirts}>Shirts</button>
            <button onClick={handleShoes}>Shoes</button>
            {/* <a>Order History</a> */}
        </div>
    )
}
export default Categories;