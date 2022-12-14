/* eslint-disable no-case-declarations */
export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            // eslint-disable-next-line prefer-const
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            }

            return {
                ...state,
                basket: newBasket,
            };
        default:
            return state;
    }
};

export default reducer;
