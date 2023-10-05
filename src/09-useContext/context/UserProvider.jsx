import { UserContext } from "./UserContext"

const user = {
    id: 112345,
    name: 'Miguel Cobian',
    email: 'miguelcobianm@gmail.com',
}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ hola: 'mundo', user: user }}>
            {children}
        </UserContext.Provider>
    );
};
