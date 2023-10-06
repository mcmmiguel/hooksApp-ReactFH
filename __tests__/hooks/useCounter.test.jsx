import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCuounter', () => {

    test('Debe retornar los valores por defecto', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, restart } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(restart).toEqual(expect.any(Function));

    });

    test('Debe de generar el counter con valor de 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);

    })

    test('Debe de incrementar el contador', () => {

        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act(() => {
            increment();
            increment(2); //Si queremos hacer esta prueba en conjunto debemos modificar el hook 
        })


        expect(result.current.counter).toBe(103); //Debemos usar el current para obtener el valor ACTUALizado

    });

    test('Debe de decrementar el contador', () => {

        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act(() => {
            decrement();
            decrement(2); //Si queremos hacer esta prueba en conjunto debemos modificar el hook 
        })


        expect(result.current.counter).toBe(97); //Debemos usar el current para obtener el valor ACTUALizado

    });

    test('Debe de reiniciar el contador al valor predefinido', () => {

        const { result } = renderHook(() => useCounter(100));
        const { restart, increment } = result.current;

        act(() => {
            increment();
            restart(); //Si queremos hacer esta prueba en conjunto debemos modificar el hook 
        })


        expect(result.current.counter).toBe(100); //Debemos usar el current para obtener el valor ACTUALizado

    });

});