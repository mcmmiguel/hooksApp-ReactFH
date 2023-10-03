import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();


    const onClick = () => {
        // document.querySelector('input').select(); //No asegura que seleccionamos lo que deseamos
        inputRef.current.select();
        // console.log(inputRef);
    }


    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button onClick={onClick} className="btn btn-primary mt-2">
                Set Focus
            </button>
        </>
    )
}
