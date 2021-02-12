import * as types from './actionTypes';

export const login = (username, email) => ({
    type: types.LOGIN,
    payload: {
        username: username,
    }
});

export const logout = () => ({
    type: types.LOGOUT,
});

export const addToCart = (name, cost) => ({
    type: types.ADD_TO_CART,
    payload: {
        name,
        cost,
    }

});

export const removeItem = (name) => ({
    type: types.REMOVE_ITEM,
    payload: {
        name,
    }

});

export const recoverCart = (cart) => ({
    type: types.RECOVER_CART,
    payload: {
        cart,
    }

});