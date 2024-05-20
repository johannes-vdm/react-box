import axios from 'axios';

const apiUrl = 'http://localhost:3000';
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchCakes = () => {
    return async (dispatch) => {
        await sleep(1000); // 1-second delay
        const response = await axios.get(`${apiUrl}/cakes`);
        console.log(response.data);
        dispatch({
            type: 'FETCH_CAKES',
            payload: response.data
        });
    };
};

export const buyCake = () => {
    return async (dispatch, getState) => {
        const {cakes} = getState();
        if (cakes.length > 0) {
            const cakeId = cakes[0].id;
            await sleep(1000); // 1-second delay
            await axios.delete(`${apiUrl}/cakes/${cakeId}`);
            dispatch({
                type: 'BUY_CAKE'
            });
        }
    };
};

export const restockCake = () => {
    return async (dispatch) => {
        await sleep(1000); // 1-second delay
        const response = await axios.get(`${apiUrl}/cakes`);
        dispatch({
            type: 'RESTOCK_CAKE',
            payload: response.data
        });
    };
};

export const addCake = (id) => {
    return async (dispatch) => {
        await sleep(1000); // 1-second delay
        const response = await axios.get(`${apiUrl}/cakes/${id}`);
        dispatch({
            type: 'ADD_CAKE',
            payload: response.data
        });
    };
};

export const deleteCake = (index) => {
    return async (dispatch, getState) => {
        const {cakes} = getState();
        const cakeId = cakes[index].id;
        await sleep(1000); // 1-second delay
        await axios.delete(`${apiUrl}/cakes/${cakeId}`);
        dispatch({
            type: 'DELETE_CAKE',
            payload: index
        });
    };
};
