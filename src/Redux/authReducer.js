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
            state.username = action.payload;
        },
        logout: state => {
            state.auth = false;
            state.username = '';
        }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;