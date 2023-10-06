// import { createBrowserRouter, } from "react-router-dom";
import { AboutPage, LoginPage, HomePage, MainApp } from './09-useContext';

export const getRoutes = [
    {
        path: "/",
        element: <MainApp />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            }
        ]
    }
];