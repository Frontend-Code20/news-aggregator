import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../utils/api";

export const fetchBookmarkData = createAsyncThunk('data/fetchBookmarkData', async (bookmarks, ThuckAPI) => {
    try {
        const response = await api.post('/bookmarked-news', { bookmarks });
        if (response.statusText === 'OK') {
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

const bookmarkReducer = createSlice({
    name: 'bookmarksList',
    initialState: {
        bookmarksList: [],
        status: 'idle',
        error: null
    },
    reducers: {
        updateBookmark: (state, action) => {
            if (action.payload.remove) {
                const newbookmarksList = state.bookmarksList.filter(bookmark => bookmark.newsID !== action.payload.newsID);
                return { ...state, bookmarksList: newbookmarksList }
            } else {
                if (!state.bookmarksList.some(bookmark => bookmark.newsID === action.payload.news.newsID)) {
                    return { ...state, bookmarksList: [...state.bookmarksList, action.payload.news] }
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookmarkData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBookmarkData.fulfilled, (state, action) => {
                if (Array.isArray(action.payload)) {
                    state.bookmarksList = action.payload;
                }
                state.error = action.payload?.message ? action.payload.message : null
                state.status = 'success';
            })
            .addCase(fetchBookmarkData.rejected, (state) => {
                state.status = 'failed';
            })
    }
});

export const { updateBookmark } = bookmarkReducer.actions;
export default bookmarkReducer.reducer;