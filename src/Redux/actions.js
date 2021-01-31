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

export const addToCart = (name, id, price, image) => ({
    type: types.ADD_TO_CART,
    payload: {
        name,
        id,
        price,
        image
    }

});