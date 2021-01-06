import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'authState',
    initialState: {
        auth: false,
        username: '',
    },
    reducers: {
        login: (state, action) => {
            state.auth = true;
            username = action.payload;
        },
        logout: state => {
            state.auth = false;
        }
    }
});

export const { login, logout } = slice.actions;

export default authSlice.reducer;