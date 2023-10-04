import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        {/* Este ejemplo de asignar la clase es para saber cómo hacerlo, pero no es necesario, ya que el navlink sabe cuando está acivo y asigna la clase automaticamente... */}

                        <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/">
                            Home
                        </NavLink>

                        <NavLink className="nav-link" to="about">
                            About
                        </NavLink>

                        <NavLink className="nav-link" to="login">
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
