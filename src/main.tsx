import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundery } from './ErrorBoundery.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ErrorBoundery fallback={<h1>An Error Has Occured</h1>}>
			<NextUIProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</NextUIProvider>
		</ErrorBoundery>
	</React.StrictMode>
);
