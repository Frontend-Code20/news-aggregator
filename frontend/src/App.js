import { BrowserRouter, Route, Routes } from 'react-router';

// Importing Reusable components
import Layout from './components/layout/layout';
import ExplorePage from './components/explorePage';
import SearchPage from './components/seachPage';
import ArticlesPage from './components/Article/ArticlesPage';
import AuthFlow from './components/layout/AuthFlow';
import ViewArticle from './components/Article/viewArticle';
import TagsScreen from './components/tagsScreen';
import Profile from './components/auth/profile';
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundary';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/** Route for authenticaion */}
        <Route path='/login' element={<ErrorBoundary> <AuthFlow /></ErrorBoundary>} />

        {/**Route for tag selection */}
        <Route path='/tags' element={<TagsScreen />} />

        <Route element={<ErrorBoundary> <Layout /> </ErrorBoundary>} >

          {/**Route for news feed */}
          <Route index element={<ErrorBoundary><ExplorePage /> </ErrorBoundary>} />

          {/**Route for search page */}
          <Route path='/search' element={<ErrorBoundary><SearchPage /></ErrorBoundary>} />

          {/**Route for full articles page */}
          <Route path='/articles' element={<ErrorBoundary><ArticlesPage /></ErrorBoundary>} />

          {/**Route for view article page */}
          <Route path='/article/:id' element={<ErrorBoundary><ViewArticle /></ErrorBoundary>} />

          {/**Route for profile page */}
          <Route path='/profile' element={<ErrorBoundary><Profile /></ErrorBoundary>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
