import PropTypes from 'prop-types';
export const CharacterCard = ({ name, image, status, species, gender, decrement, increment }) => {
    return (
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
    );
};

CharacterCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
}