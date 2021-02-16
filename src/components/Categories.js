import react, {useState} from "react"
function Categories({items, category, setCategory}){
    // const [category, setCategory] = useState("")
    // console.log(category)

    function handlePants(){
        setCategory("Pants")
        // filterCategory("Pants")
    }

    function handleShirts(){
        setCategory("Shirts")
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
        </div>
    )
}
export default Categories;