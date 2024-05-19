// reducer.js

export const cakes = [
    {id: 1, color: 'Red'},
    {id: 2, color: 'Blue'},
    {id: 3, color: 'Green'},
    {id: 4, color: 'Yellow'},
    {id: 5, color: 'Pink'},
    {id: 6, color: 'Purple'},
    {id: 7, color: 'Orange'},
    {id: 8, color: 'Brown'},
    {id: 9, color: 'White'},
    {id: 10, color: 'Black'}
];

const initialState = {
    cakes: cakes
};

const cakeReducer = (state = initialState, action) => {
    const findCakeByID = (id) => {
        return cakes.find(cake => cake.id === id);
    };

    switch (action.type) {

        case 'BUY_CAKE':
            return {
                ...state,
                cakes: state.cakes.slice(1)
            };
        case 'RESTOCK_CAKE':
            return {
                cakes: cakes
            };
        case 'ADD_CAKE':
            const foundCake = findCakeByID(action.payload);
            if (foundCake) {
                return {
                    ...state,
                    cakes: [...state.cakes, foundCake]
                };
            }
            return state;
        case "DELETE_CAKE":
            return {
                ...state,
                cakes: state.cakes.filter((_, index) => index !== action.payload.index)
            }
        default:
            return state;
    }
};

export default cakeReducer;
