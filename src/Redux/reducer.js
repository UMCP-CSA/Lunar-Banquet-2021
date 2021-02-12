import { ADD_TO_CART, LOGIN, LOGOUT, RECOVER_CART, REMOVE_ITEM } from './actionTypes';

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
            
            if (!duplicate) {
                localStorage.setItem('cart', JSON.stringify([...state.cart, {name: name, cost: cost}]))
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
                localStorage.setItem('cart', JSON.stringify(newArr))

                return {
                    ...state,
                    total: newTotal,
                    cart: newArr,
                };
            }
        }
        case RECOVER_CART: {
            const localStorageCart = action.payload.cart;
            if (localStorageCart) {
                let newTotal = 0;
                localStorageCart.forEach(item => {
                    newTotal += item.cost
                });
                return {
                    ...state,
                    cart: localStorageCart,
                    total: newTotal
                };
            }
        }
        case REMOVE_ITEM: {
            const name = action.payload.name;
            const newArr = [...state.cart]
            newArr.map((item, index) => {
                if (item.name == name) {
                    newArr.splice(index, 1)
                }
            })
            return {
                ...state,
                cart: newArr
            }
        }
        default:
            return state;
    }
};

export default reducer;