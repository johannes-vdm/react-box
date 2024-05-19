export const BUY_CAKE = 'BUY_CAKE';
export const RESTOCK_CAKE =  'RESTOCK_CAKE';

export const buyCake = () => {
    return {
        type: BUY_CAKE
    };
};

export const restockCake = () => {
    return {
        type: RESTOCK_CAKE
    }
}