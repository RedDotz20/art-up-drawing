import { useState } from 'react';
import {
	Avatar,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Link,
} from '@nextui-org/react';
import { useAuth0 } from '@auth0/auth0-react';

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuItems = ['Profile', 'Dashboard', 'Activity'];
	const { user, logout } = useAuth0();

	if (!user) return null;

	const handleLogout = () => {
		logout({
			logoutParams: {
				returnTo: window.location.origin,
			},
		});
	};

	return (
		<Navbar
			classNames={{
				base: 'bg-primary/90 shadow-lg',
			}}
			isBlurred={true}
			position="sticky"
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<p className="font-bold text-inherit text-white">ONLINE ART APP</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				as="div"
				justify="end"
			>
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<Avatar
							as="button"
							className="transition-transform"
							color="primary"
							size="sm"
							name={user.name}
							src={user.picture}
						/>
					</DropdownTrigger>
					<DropdownMenu
						aria-label="Profile Actions"
						variant="flat"
					>
						<DropdownItem
							key="profile"
							className="h-14 gap-2"
						>
							<p className="font-semibold">Signed in as</p>
							<p className="font-semibold">{user.email}</p>
						</DropdownItem>
						<DropdownItem key="settings">Settings</DropdownItem>
						<DropdownItem
							key="logout"
							color="danger"
							onClick={handleLogout}
						>
							Log Out
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								index === 2
									? 'primary'
									: index === menuItems.length - 1
									? 'danger'
									: 'foreground'
							}
							className="w-full"
							href="#"
							size="lg"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
