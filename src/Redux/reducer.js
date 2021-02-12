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
            let duplicate = null
            if (state.cart != []) duplicate = state.cart.find(item => item.name == name)
            console.log(duplicate)
            
            if (!duplicate) {
                localStorage.setItem('cart', [...state.cart, {name: name, cost: cost}].toString)
                return {
                    ...state,
                    total: newTotal,
                    cart: [...state.cart, {name: name, cost: cost}]
                };
            } else {
                const index = state.cart.findIndex(item => item.name == name)
                const newTotal = parseInt(state.total - duplicate.cost + cost)
                const newArr = [...state.cart]
                newArr[index].cost = cost
                console.log(newArr.toString())
                return {
                    ...state,
                    total: newTotal,
                    cart: newArr,
                };
            }
        }
        default:
            return state;
    }
};

export default reducer;