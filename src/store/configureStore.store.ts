import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import ConvertReducer from '../reducers/Convert.reducer';

const middleware = [...getDefaultMiddleware()]

const reducer = ConvertReducer;

const store = configureStore({reducer, middleware});

export default store;