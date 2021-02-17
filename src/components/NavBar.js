import { NavLink } from "react-router-dom"
import '../components/css/navbar.css';

const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "red",
    textDecoration: "none",
    color: "white",
}

function NavBar() {

    return (
        
<div className="navbar">
            
            <NavLink
                to="/home"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black"
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/carts"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black"
                }}
            >
                View Carts
            </NavLink>
        </div>
    )
}

export default NavBar