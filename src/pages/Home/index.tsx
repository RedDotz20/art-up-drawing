import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../Home/components/LoginButton';
import { LogoutButton } from '../Home/components/LogoutButton';
import { SignupButton } from '../Home/components/SignUpButton';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home', { replace: true });
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="flex gap-4">
        <SignupButton />
        <LoginButton />
      </div>
    );
  }
}
