import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../utils/api";

export const fetchUserData = createAsyncThunk('data/fetchUserData', async () => {
    try {
        const respone = await api.post('/user-info');
        if(respone.statusText === 'OK'){
            return respone.data;
        }
        throw new Error("Failed to fetch user data'") 
    } catch (error) {
        if(error.isAxiosError){
            return {message: error.message, code: error.code, status: error.respone?.status}
        }
        return {message: error.message}
    }
}) 

const userReducer = createSlice({
    name: 'userInfo',
    initialState: {
        userInfo: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUserData.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchUserData.fulfilled, (state, action) => {
            state.userInfo = action.payload?.userName ? action.payload : null;
            state.status = 'success';
            state.error = action.payload?.message
        })
        .addCase(fetchUserData.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export default userReducer.reducer;