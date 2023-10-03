import { useCounter, useFetch } from "../hooks";

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    const { name, image, status, species, gender } = !!data && data;

    return (
        <>
            <h1>Rick and Morty</h1>
            <hr />

            {isLoading ? (
                <div className="alert alert-info text-center">Cargando...</div>
            ) : hasError ? (
                <div className="alert alert-danger text-center">Hubo un error al cargar los datos.</div>
            ) : (
                <div className="card card-container">
                    <img src={image} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h4 className="card-title text-center">{name}</h4>
                        <p className="card-text text-center">Status: {status}</p>
                        <p className="card-text text-center">{species}</p>
                        <p className="card-text text-center">{gender}</p>
                        <div className="d-flex buttons-container">
                            <button className="btn btn-primary" onClick={() => decrement(1)}>Previous</button>
                            <button className="btn btn-primary" onClick={() => increment(1)}>Next</button>
                        </div>
                    </div>
                </div>
            )};
        </>
    )
}
