import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import MovieSearchPage from './pages/MovieSearchPage/MovieSearchPage.tsx';
import MoviePage from './pages/MoviePage/MoviePage.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NotFoundPage from './pages/NotFoundPage.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<MovieSearchPage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
