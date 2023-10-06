import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Miguel',
        email: 'miguelcobian@google.com',
    }

    test('Debe de regresar a información por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: { name: initialForm.name, email: initialForm.email },
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });

    });

    test('Debe de cambiar el nombre del formulario', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        const newValue = 'Pepe'

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);

    });

    test('Debe de realizar el reset del formulario', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;
        const newValue = 'Pepe'

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

    });

});