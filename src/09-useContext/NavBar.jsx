import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="nav-item">
                <Link className="nav-link" to='/'>Home</Link>
            </div>
            <div className="nav-item">
                <Link className="nav-link" to='about'>About</Link>
            </div>
            <div className="nav-item">
                <Link className="nav-link" to='login'>Login</Link>
            </div>
        </nav>
    )
}
