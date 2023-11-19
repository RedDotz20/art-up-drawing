import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../Home/components/LoginButton';
import { LogoutButton } from '../Home/components/LogoutButton';
import { SignupButton } from '../Home/components/SignUpButton';

export default function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();

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

  if (!user) {
    return null;
  }

  return (
    <div className="flex gap-4">
      <>
        <div>
          <img
            src={user.picture}
            alt={user.name}
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <LogoutButton />
      </>
    </div>
  );
}
