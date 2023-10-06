import { render, screen } from "@testing-library/react";
// import { MainApp } from "../../src/09-useContext";
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { getRoutes } from "../../src/Routes";

describe('Pruebas en <MainApp />', () => {

    test('Debe de mostrar el HomePage', () => {

        const router = createMemoryRouter(getRoutes, { initialEntries: ['/'], });

        render(<RouterProvider router={router} />);

        const head = screen.getByRole('heading', { level: 1 }).innerHTML;

        // screen.debug();

        expect(head).toContain('Home Page');

    });

    test('Debe de mostrar el LoginPage', () => {

        const router = createMemoryRouter(getRoutes, { initialEntries: ['/login'], });

        render(<RouterProvider router={router} />);

        const head = screen.getByRole('heading', { level: 1 }).innerHTML;

        // screen.debug();

        expect(head).toContain('Login Page');

    });



});