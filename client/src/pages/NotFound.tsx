import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@nextui-org/react';

function NotFound() {
  const [mountLoading, setMountLoading] = useState(false);

  const navigate = useNavigate();
  const redirectToLogin = () => navigate('/', { replace: true });

  useEffect(() => {
    setMountLoading(true);
    setTimeout(() => setMountLoading(false), 3000);
    setTimeout(() => redirectToLogin(), 3000);

    () => {
      return clearTimeout;
    };
  }, []);

  return (
    <div className="bg-[#333] h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-bold mb-8">404 Not Found</h1>
      {mountLoading && (
        <div className="flex gap-6">
          <Spinner
            size="md"
            color="white"
          />
          <h1 className="text-white text-xl">Redirecting to Login</h1>
        </div>
      )}
    </div>
  );
}

export default NotFound;
