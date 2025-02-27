import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../utils/api";

export const fetchArticlesByCategory = createAsyncThunk('data/fetchArticlesByCategory', async (category, ThunkAPI) => {
    console.log(category);
    try {
        const respone = await api.post('/full-articles', { category });
        if (respone.statusText === 'OK') {
            return respone.data
        }
        throw new Error('Failed to fetch articles.')
    } catch (error) {
        if (error.isAxiosError) {
            return { message: error.message, code: error.code, status: error.response?.status }
        } else {
            return { message: error.message }
        }
    }
});

const articlesReducer = createSlice({
    name: 'articles',
    initialState: {
        articles: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesByCategory.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchArticlesByCategory.fulfilled, (state, action) => {
                if (action.payload?.category) {
                    const isLoaded = state.articles.find(art => art?.category === action.payload.category);
                    if (!isLoaded) {
                        state.articles.push({ category: action.payload.category, articles: action.payload.articles });;
                    } else {
                        state.articles[state.articles.indexOf(isLoaded)].articles.push(...action.payload.articles)
                    }
                }
                state.error = action.payload?.message ? action.payload.message : null;
                state.status = 'success'
            })
            .addCase(fetchArticlesByCategory.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export default articlesReducer.reducer;