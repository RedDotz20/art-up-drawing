import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthenticationGuard } from './components/AuthenticationGuard';

import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Drawing from './pages/Drawing';
import Home from './pages/Home';

export default function App() {
  // const { isAuthenticated } = useAuth0();
  // const navigate = useNavigate();

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
          path="/draw"
          element={<AuthenticationGuard component={Drawing} />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </main>
  );
}
