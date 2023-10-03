import { useCounter, useFetch } from "../hooks";
import { CharacterCard } from "../03-examples/CharacterCard";

export const Layout = () => {

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    // MEJOR VER ESTE EJEMPLO DE USO EN EL CODIGO DE FER

    const { counter, increment, decrement } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    const { name, image, status, species, gender } = !!data && data;

    return (
        <>
            <h1>Rick and Morty</h1>
            <hr />

            {isLoading ? (
                <div className="alert alert-info text-center">Cargando...</div>
            ) : (
                <CharacterCard
                    name={name}
                    image={image}
                    status={status}
                    species={species}
                    gender={gender}
                    increment={increment}
                    decrement={decrement} />
            )};
        </>
    )
}
