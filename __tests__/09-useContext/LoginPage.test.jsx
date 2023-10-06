import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";


describe('Pruebas en <LoginPage />', () => {

    const setUserMock = jest.fn();

    test('Debe de mostrar el componente SIN el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        // screen.debug();

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toBe('null');

    });

    test('Debe de llamar al setUser cuando se hace click en el botón', () => {

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        // screen.debug();

        const setUserButton = screen.getByRole('button');

        fireEvent.click(setUserButton);

        expect(setUserMock).toHaveBeenCalledWith({ "email": "miguelcobian@google.com", "id": 123, "name": "Miguel" });

    });

});