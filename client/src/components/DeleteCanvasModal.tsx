import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
} from '@nextui-org/react';

interface DeleteModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function DeleteCanvasModal({
	isOpen,
	onClose,
}: DeleteModalProps) {
	return (
		<Modal
			size="xs"
			backdrop="blur"
			isOpen={isOpen}
			onClose={onClose}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Modal Title
						</ModalHeader>
						<ModalBody>asdf</ModalBody>
						<ModalFooter>
							<Button
								color="danger"
								variant="light"
								onPress={onClose}
							>
								Close
							</Button>
							<Button
								color="primary"
								onPress={onClose}
							>
								Action
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
