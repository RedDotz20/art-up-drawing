import { Auth0Provider, AppState } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { AUTH0_CALLBACK_URL, AUTH0_DOMAIN, AUTH0_CLIENT_ID } from '../config';

type AuthProviderProps = { children: React.ReactNode };

export const Auth0ProviderWithNavigate = ({ children }: AuthProviderProps) => {
	const navigate = useNavigate();

	const onRedirectCallback = (appState: AppState | undefined) => {
		navigate(appState?.returnTo || window.location.pathname);
	};

	if (!(AUTH0_DOMAIN && AUTH0_CLIENT_ID && AUTH0_CALLBACK_URL)) {
		return null;
	}

	return (
		<Auth0Provider
			domain={AUTH0_DOMAIN}
			clientId={AUTH0_CLIENT_ID}
			authorizationParams={{
				redirect_uri: AUTH0_CALLBACK_URL,
			}}
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</Auth0Provider>
	);
};
