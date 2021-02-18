import React, {useState} from "react"
import { Container, Button, Icon } from 'semantic-ui-react'

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
        <Container textAlign='center'>

            <Button onClick={handlePants} animated>
                <Button.Content visible>Pants</Button.Content>
                    <Button.Content hidden>
                        <Icon name='star' />
                    </Button.Content>
            </Button>

            <Button onClick={handleShirts} animated>
                <Button.Content visible>Shirts</Button.Content>
                    <Button.Content hidden>
                        <Icon name='star' />
                    </Button.Content>
            </Button>

            <Button onClick={handleShoes} animated>
                <Button.Content visible>Shoes</Button.Content>
                    <Button.Content hidden>
                        <Icon name='star' />
                    </Button.Content>
            </Button>
       </Container>
    )
}
export default Categories;