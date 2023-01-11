import "./Navbar.css"
import {Link} from "react-router-dom"

export default function Navbar () {
    return(
        <div className="navbar">
            <div className="navbar__content">
                <Link to="/listPage">
                    <div className="navbar__logo">Logo</div>
                </Link>
                <div className="opt_logout">
                    <img className="user__logo" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <Link to="/">
                        <p>Log Out</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}