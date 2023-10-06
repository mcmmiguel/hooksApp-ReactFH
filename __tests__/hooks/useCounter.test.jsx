import { renderHook } from '@testing-library/react';
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

});