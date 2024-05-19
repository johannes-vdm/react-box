import {connect} from 'react-redux';
import {buyCake, restockCake} from './actions';

// eslint-disable-next-line react/prop-types,react-refresh/only-export-components
const CakeContainer = ({cakes, buyCake, restockCake}) => {
    const handleBuyCake = () => {
        buyCake();
    };

    const handleRestockCake = () => {
        restockCake();
    }

    return (
        <div>

            {/* eslint-disable-next-line react/prop-types */}
            <h2>Cakes Available: {cakes.length}</h2>

            {/* eslint-disable-next-line react/prop-types */}
            {cakes.length > 0 ? (
                <div>
                    {/* eslint-disable-next-line react/prop-types */}
                    <h3>Cake ID: {cakes[0].id}</h3>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p>Color: {cakes[0].color}</p>
                    <button onClick={handleBuyCake}>Buy Cake</button>
                </div>
            ) : (
                <>
                    <h3>No cakes left</h3>
                    <button onClick={handleRestockCake}>Restock</button>
                </>
            )}
            {/* eslint-disable-next-line react/prop-types */}
            {cakes.map((cake) => {
                return <li key={cake.id} style={{
                    background: cake.color,
                    filter: 'invert(100%)',
                    color: 'white'
                }}>{cake.id}: {cake.color}</li>
            })}

        </div>
    );
};

const mapStateToProps = state => {
    return {
        cakes: state.cakes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        restockCake: () => dispatch(restockCake()),
    };
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

