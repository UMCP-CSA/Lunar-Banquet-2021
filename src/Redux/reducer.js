import { LOGIN, LOGOUT } from './actionTypes';

const initialState = {
    auth: false,
    name: '',
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
        default:
            return state;
    }
};

export default reducer;