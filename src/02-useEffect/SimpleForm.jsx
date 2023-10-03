import { useEffect, useState } from "react"


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'mcmmiguel',
        email: 'miguelcobian@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    useEffect(() => {
        console.log('USEEFFECT');
    }, [])

    return (
        <>
            <h1>Formulario Simple</h1>

            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="miguel@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
        </>
    )
}
