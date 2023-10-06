import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en el <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();
    const mockDecrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
        decrement: mockDecrement,
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('Rick and Morty'));
        // screen.debug();

    });

    test('Debe de mostrar un personaje', () => {

        useFetch.mockReturnValue({
            data: {
                name: 'Marino',
                image: '',
                status: 'Solterosky',
                species: 'dogo',
                gender: 'sabe'
            },
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Marino')).toBeTruthy();
        expect(screen.getByText('Status: Solterosky')).toBeTruthy();
        expect(screen.getByText('dogo')).toBeTruthy();
        // screen.debug();
    });

    test('Debe de llamar la función incrementar', () => {



        useFetch.mockReturnValue({
            data: {
                name: 'Marino',
                image: '',
                status: 'Solterosky',
                species: 'dogo',
                gender: 'sabe'
            },
            isLoading: false,
            hasError: null,
        });


        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next' });
        fireEvent.click(nextButton);


        expect(mockIncrement).toHaveBeenCalled()

    });

});
