import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@nextui-org/react';

import NotFoundIcon from '../assets/not-found-icon.svg';

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
    <div className="bg-[#1a9cc6] text-white h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex mb-16">
        <div className="text-right">
          <h1 className="text-[#1163b8] text-9xl font-bold">404</h1>
          <h2 className="text-4xl font-semibold mb-4">Something Went Wrong</h2>
          <p className="text-2xl overflow-wrap-break-word w-[450px]">
            The page you are looking for could not be found
          </p>
        </div>
        <img
          src={NotFoundIcon}
          alt="NotFoundIcon"
          width={400}
        />
      </div>

      {mountLoading && (
        <div className="flex gap-6">
          <Spinner
            size="md"
            color="white"
          />
          <h1 className="text-white text-2xl font-semibold">
            Redirecting To Home Page
          </h1>
        </div>
      )}
    </div>
  );
}

export default NotFound;
