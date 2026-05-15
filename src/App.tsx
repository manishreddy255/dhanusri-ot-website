import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import HomePage from './pages/HomePage';

const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogArticlePage = lazy(() => import('./pages/BlogArticlePage'));

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <BlogPage />
            </Suspense>
          }
        />
        <Route
          path="/blog/:articleId"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <BlogArticlePage />
            </Suspense>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
