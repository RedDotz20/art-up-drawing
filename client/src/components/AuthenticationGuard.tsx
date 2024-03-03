import { withAuthenticationRequired } from '@auth0/auth0-react';

interface AuthenticationGuardProps {
  component: React.ComponentType<JSX.Element>;
}

export const AuthenticationGuard = ({ component }: AuthenticationGuardProps) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div className="page-layout">LOADING ...</div>,
  });

  return <Component key={null} type={undefined} props={undefined} />;
};
