// src/redux/reducers.js
import { BUY_CAKE, RESTOCK_CAKE } from './actions';

const initialState = {
    cakes: [
        { id: 1, color: 'Red' },
        { id: 2, color: 'Blue' },
        { id: 3, color: 'Green' },
        { id: 4, color: 'Yellow' },
        { id: 5, color: 'Pink' },
        { id: 6, color: 'Purple' },
        { id: 7, color: 'Orange' },
        { id: 8, color: 'Brown' },
        { id: 9, color: 'White' },
        { id: 10, color: 'Black' }
    ]
};

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: {
            const newCakes = state.cakes.slice(1);
            return {
                ...state,
                cakes: newCakes
            };
        }
        case RESTOCK_CAKE: {
            return {
                cakes: initialState.cakes
            }
        }
        default:
            return state;
    }
};

export default cakeReducer;
