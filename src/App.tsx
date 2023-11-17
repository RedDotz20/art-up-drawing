import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Drawing from './pages/Drawing';

export default function App() {
  return (
    <main className="flex flex-col h-screen w-full justify-center items-center bg-[#3b3b3b]">
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/home"
          element={<Dashboard />}
        />
        <Route
          path="/draw"
          element={<Drawing />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </main>
  );
}
