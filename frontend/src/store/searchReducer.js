import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../utils/api';

export const fetchSearchedData = createAsyncThunk('data/fetchSearchData', async (data, ThuckAPI) => {
    
    try {
        const searchValue = data?.searchInput;
        const category = data?.category;
        const response = await api.post('/search', { category, searchValue });
        if (response.statusText === "OK") {
            return response.data;
        }
    } catch (error) {
        if (error.isAxiosError) {
            return { message: error.message, code: error.code, status: error.response?.status }
        } else {
            return { message: error.message }
        }
    }
});

const searchReducer = createSlice({
    name: 'searchResults',
    initialState: {
        searchResults: [],
        status: 'idle',
        error: null
    },
    reducers: {
        updateError: (state, action) => {
            console.log(action.payload);
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchedData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchSearchedData.fulfilled, (state, action) => {
                state.status = 'success'
                console.log(action.payload);
                if (action.payload?.category) {
                    const category = state.searchResults.find(result => result.category === action.payload?.category);
                    if (!category) {
                        const newResult = {
                            category: action.payload?.category,
                            results: action.payload?.searchResults
                        }
                        state.searchResults.push(newResult);
                        console.log(action.payload?.category, category, newResult);
                    } else {
                        state.searchResults[state.searchResults.indexOf(category)].results.push(...action.payload.searchResults);
                    }
                }
                state.error = action.payload?.message;
            })
            .addCase(fetchSearchedData.rejected, (state) => {
                state.status = 'failed'
            })
    }
})


export const { updateError } = searchReducer.actions;
export default searchReducer.reducer; 