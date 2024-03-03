import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@nextui-org/react';

export default function NotFound() {
  const [mountLoading, setMountLoading] = useState(false);

  const navigate = useNavigate();

  const redirectToLogin = useCallback(() => {
    navigate('/', { replace: true });
  }, [navigate]);

  useEffect(() => {
    setMountLoading(true);
    setTimeout(() => setMountLoading(false), 3000);
    setTimeout(redirectToLogin, 3000);

    return () => {
      clearTimeout;
    };
  }, [redirectToLogin]);

  return (
    <div className="bg-[#333] h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-bold mb-8">404 Not Found</h1>
      {mountLoading && (
        <div className="flex gap-6">
          <Spinner size="md" color="white" />
          <h1 className="text-white text-xl">Redirecting to Login</h1>
        </div>
      )}
    </div>
  );
}
