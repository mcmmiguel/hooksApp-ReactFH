import { Link, Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";


export const MainApp = () => {

    console.log('Hla soy MAin');

    return (
        <>
            <h1>Main App</h1>
            <NavBar />

            <hr />

            <Outlet />
            {/* Para usar como layout de las rutas children  */}

        </>
    )
}
