import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { api } from '../api'


const Convert = createSlice({
    initialState: {
        loading: false,
        data: {},
        error: {},
        value: {}
    },
    name: 'convertReducer',
    reducers: {
        userConvertion(state, { payload }) {
            state.value = payload;
        },
        fetchStarted(state) {
            state.loading = true
        },
        fetchSuccess(state, { payload }) {
            state.loading = false;
            state.data = payload;
        },
        fetchError(state, { payload }) {
            state.loading = false;
            state.data = {};
            state.error = payload
        },
    }
})

export default Convert.reducer;
export const { fetchError, fetchStarted, fetchSuccess, userConvertion } = Convert.actions;
export const getConvert = async (dispatch: Dispatch, currency: string) => {
    try {
        dispatch(fetchStarted());
        const { data } = await api.get(`/${currency}-BRL`);
        return dispatch(fetchSuccess(data))
    } catch (error) {
        return dispatch(fetchError(error))
    }
}