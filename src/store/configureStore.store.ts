import { configureStore } from '@reduxjs/toolkit';
import Convert from '../reducers/Convert.reducer'

const store = configureStore(Convert);

export default store;