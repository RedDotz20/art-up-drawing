import { Routes, Route } from 'react-router-dom';
import { AuthenticationGuard } from './components/AuthenticationGuard';

import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Drawing from './pages/Drawing';
import Home from './pages/Home';

export default function App() {
  return (
    <main className="flex flex-col h-screen w-full justify-center items-center bg-[#3b3b3b]">
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
        {/* <Route
            path="/draw"
            element={<AuthenticationGuard component={Drawing} />}
          /> */}
      </Routes>
    </main>
  );
}
