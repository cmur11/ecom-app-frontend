import { NavLink } from "react-router-dom"
import '../components/css/navbar.css';
import { Menu } from 'semantic-ui-react'

const square = { width: 175, height: 175 }

function NavBar() {

    return (
        <>
            <Menu>
                <Menu.Item>
                    <NavLink
                        to="/home"
                        exact
                    >
                        Home
                    </NavLink>
                </Menu.Item>

                <Menu.Item>
                    <NavLink
                        to="/carts"
                        exact
                    >
                        View Cart
                    </NavLink>
                </Menu.Item>
            </Menu>
        </>
    )
}

export default NavBar