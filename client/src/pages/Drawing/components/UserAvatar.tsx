import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Avatar,
	AvatarIcon,
} from '@nextui-org/react';

export default function UserAvatar() {
	return (
		<div className="absolute top-5 right-4">
			<Dropdown placement="bottom-end">
				<DropdownTrigger>
					<Avatar
						as="button"
						icon={<AvatarIcon />}
						classNames={{
							base: 'bg-gradient-to-br from-[#FFB457] to-[#FF705B]',
							icon: 'text-black/80',
						}}
						className="transition-transform"
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
						<p className="font-semibold">zoey@example.com</p>
					</DropdownItem>
					<DropdownItem key="settings">My Settings</DropdownItem>
					<DropdownItem
						key="logout"
						color="danger"
					>
						Log Out
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	);
}
