import { createStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';

export default createStore(authReducer, window.devToolsExtension && window.devToolsExtension());