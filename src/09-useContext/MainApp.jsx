import { Outlet } from "react-router-dom";


export const MainApp = () => {

    console.log('Hla soy MAin');

    return (
        <>
            <h1>Main App</h1>
            <hr />

            {/* Para usar como layout de las rutas children  */}
            <Outlet />

        </>
    )
}
