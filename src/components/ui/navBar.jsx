import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" exact to="/">Main</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/users">Users</Link>
            </li>
        </ul>
    )
}

export default NavBar
