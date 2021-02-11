import { ADD_TO_CART, LOGIN, LOGOUT } from './actionTypes';

const initialState = {
    auth: false,
    name: '',
    cart: [],
    total: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            const username = action.payload.username;
            return {
                ...state,
                auth: true,
                name: username,
            };
        }
        case LOGOUT: {
            return {
                ...state,
                auth: false,
                name: '',
            };
        }
        case ADD_TO_CART: {
            const cost = action.payload.cost;
            const name = action.payload.name;
            const newTotal = parseInt(state.total) + parseInt(cost);
            return {
                ...state,
                total: newTotal,
                cart: [...state.cart, {name: name, cost: cost}]
            };
        }
        default:
            return state;
    }
};

export default reducer;