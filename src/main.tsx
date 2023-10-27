import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundery } from './ErrorBoundery.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundery fallback={<h1>An Error Has Occured</h1>}>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </NextUIProvider>
    </ErrorBoundery>
  </React.StrictMode>
);
