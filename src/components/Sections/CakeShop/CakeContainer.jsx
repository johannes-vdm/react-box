import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake, restockCake } from './actions';

const CakeContainer = () => {
    const cakes = useSelector(state => state.cakes);
    const dispatch = useDispatch();

    const handleBuyCake = () => {
        dispatch(buyCake());
    };

    const handleRestockCake = () => {
        dispatch(restockCake());
    };

    const handleAddCake = (id) => {
        dispatch({
            type: 'ADD_CAKE',
            payload: id
        });
    };

    const loadCakes = () => {
        dispatch(restockCake());
    };

    console.log(cakes);

    useEffect(() => {
        return loadCakes;
    }, [dispatch]);

    return (
        <div>
            <h2>Cakes Available: {cakes?.length}</h2>

            <button onClick={handleRestockCake}>RESET</button>

            {cakes?.length > 0 ? (
                <div>
                    <h3>Cake ID: {cakes[0].id}</h3>
                    <p>Color: {cakes[0].color}</p>
                    <button onClick={handleBuyCake}>Buy Cake</button>

                </div>
            ) : (
                <>
                    <h3>No cakes left</h3>
                    <button onClick={handleRestockCake}>Restock</button>
                </>
            )}

            <ul>
                {cakes && cakes.map((cake, index) => (
                    <li key={index} style={{background: cake.color, filter: 'invert(100%)', color: 'white'}}>
                        {cake.id}: {cake.color}
                        <button onClick={()=>{
                            dispatch({type: "DELETE_CAKE", payload: {index: index}})
                        }}>DELETE</button>
                    </li>
                ))}
            </ul>

            <button onClick={() => handleAddCake(1)}>Add Cake with ID 1</button>
            <button onClick={() => handleAddCake(2)}>Add Cake with ID 2</button>
        </div>
    );
};

export default CakeContainer;
