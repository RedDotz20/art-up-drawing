import { useState } from 'react';
import {
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarContent,
  // NavbarItem,
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
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <Logo /> */}
          <p className="font-bold text-inherit">ONLINE ART APP</p>
        </NavbarBrand>
      </NavbarContent>

      {/* <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      >
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
          >
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            aria-current="page"
          >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
          >
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}

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
export function Logo() {
  return (
    <svg
      fill="none"
      height="36"
      viewBox="0 0 32 32"
      width="36"
    >
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}
