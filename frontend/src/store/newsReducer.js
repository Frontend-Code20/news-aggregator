import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../utils/api';

export const fetchNewsData = createAsyncThunk('data/fetchNewsData', async () => {
    try {
        const respone = await api.post('/news-posts');
        if(respone.statusText === 'OK'){
            return respone.data
        }
        throw new Error('Failed to fetch news data');
    } catch (error) {
        if (error.isAxiosError) {
            // If it's an Axios error, extract relevant details and return a serializable object
            return { message: error.message, code: error.code, status: error.response?.status };
        }
        return {message: error.message};
    }
});

const newsReducer = createSlice({
    name: 'newsList',
    initialState: {
        newsList: [],
        status: 'idle',
        error: null
    },

    reducers: {
        updateLike: (state, action) => {
            state.newsList.forEach((news, idx) => {
                if(news.newsID === action.payload.newsID){
                    if(action.payload.liked){
                        state.newsList[state.newsList.indexOf(news)].likes++;  
                    }else{
                        state.newsList[state.newsList.indexOf(news)].likes--;  
                    }
                }
            });
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchNewsData.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchNewsData.fulfilled, (state, action) => {
            const news = Array.isArray(action.payload) ? action.payload : []
            state.newsList = [...state.newsList, ...news];
            state.error = action.payload?.message;
            state.status = 'success'
        })
        .addCase(fetchNewsData.rejected, (state,action) => {
            state.status = 'failed'
            state.error =  action.error.message
        })

    }
})

export const { updateLike } = newsReducer.actions; 
export default newsReducer.reducer;