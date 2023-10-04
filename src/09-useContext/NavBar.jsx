import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        {/* Este ejemplo de asignar la clase es para saber cómo hacerlo, pero no es necesario, ya que el navlink sabe cuando está acivo y asigna la clase automaticamente... */}
                        <ul className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/">
                                Home
                            </NavLink>
                        </ul>

                        <ul className="nav-item">
                            <NavLink className="nav-link" to="about">
                                About
                            </NavLink>
                        </ul>

                        <ul className="nav-item">
                            <NavLink className="nav-link" to="login">
                                Login
                            </NavLink>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
