import { createStore } from '@reduxjs/toolkit';
import reducer from './reducer';

export default createStore(reducer, window.devToolsExtension && window.devToolsExtension());