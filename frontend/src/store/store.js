import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newsReducer';
import userReducer from './userReducer';
import articlesReducer from './articleReducer';
import searchReducer from './searchReducer';
import bookmarksReduer from './bookmarkReducer';

const store = configureStore({
    reducer: {
        newsList: newsReducer,
        userInfo: userReducer,
        articles: articlesReducer,
        searchResults: searchReducer,
        bookmarksList: bookmarksReduer
    }
})

export default store;