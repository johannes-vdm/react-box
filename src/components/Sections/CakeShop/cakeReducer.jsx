const initialState = {
    cakes: []
};

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CAKES':
            return {
                ...state,
                cakes: action.payload
            };
        case 'BUY_CAKE':
            return {
                ...state,
                cakes: state.cakes.slice(1)
            };
        case 'RESTOCK_CAKE':
            return {
                ...state,
                cakes: action.payload
            };
        case 'ADD_CAKE':
            return {
                ...state,
                cakes: [...state.cakes, action.payload]
            };
        case 'DELETE_CAKE':
            return {
                ...state,
                cakes: state.cakes.filter((_, index) => index !== action.payload)
            };
        default:
            return state;
    }
};

export default cakeReducer;
