import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@nextui-org/react';

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
      },
      // appState: {
      //   returnTo: '/',
      // },
    });
  };

  return (
    <Button
      className="button__sign-up"
      onClick={handleSignUp}
    >
      Sign Up
    </Button>
  );
};
