import { Link, Outlet } from "react-router-dom";


export const MainApp = () => {

    console.log('Hla soy MAin');

    return (
        <>
            <h1>Main App</h1>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='login'>Login</Link>

            <hr />

            <Outlet />
            {/* Para usar como layout de las rutas children  */}

        </>
    )
}
