import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import ExplorePage from './components/exploreContainer';
import SearchPage from './components/seachPage';
import ArticlesPage from './components/ArticlesPage';
import StartAppPage from './components/startAppPage';
import ViewArticle from './components/viewArticle';
import TagsScreen from './components/tagsScreen';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<StartAppPage />} />
        <Route path='/tags' element={<TagsScreen />} />
        <Route element={<Layout />} >
          <Route index element={<ExplorePage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/articles' element={<ArticlesPage />} />
          <Route path='/article/:id' element={<ViewArticle />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
