import { Routes, Route } from 'react-router-dom';
import { AuthenticationGuard } from './components/AuthenticationGuard';

import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Drawing from './pages/Drawing';
import Home from './pages/Home';

export default function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/home"
				element={<AuthenticationGuard component={Dashboard} />}
			/>
			<Route
				path="/canvas/:canvasId"
				element={<AuthenticationGuard component={Drawing} />}
			/>
			<Route
				path="*"
				element={<NotFound />}
			/>
		</Routes>
	);
}
