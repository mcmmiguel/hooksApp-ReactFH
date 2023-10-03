import { useEffect } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        // console.log('UseEffect called!');
    }, [])

    useEffect(() => {
        // console.log('FormState changed');
    }, [formState])

    useEffect(() => {
        // console.log('email changed');
    }, [email])

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

            {
                username === 'mcmmiguel' && <Message />
            }

            <input
                type="email"
                className="form-control mt-2"
                placeholder="miguel@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

        </>
    )
}
