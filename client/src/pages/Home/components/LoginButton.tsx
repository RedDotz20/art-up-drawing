import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@nextui-org/react';

export const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	const handleLogin = async () => {
		await loginWithRedirect({
			appState: { returnTo: '/' },
		});
	};

	return (
		<Button
			className="min-w-[7rem]"
			variant="shadow"
			color="primary"
			onClick={handleLogin}
		>
			Log In
		</Button>
	);
};
