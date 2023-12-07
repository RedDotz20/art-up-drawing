import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';

import useDeleteCanvas from '../hooks/useDeleteCanvas';

interface DeleteModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteCanvasModal({
  id,
  isOpen,
  onClose,
}: DeleteModalProps) {
  const { deleteUserCanvas } = useDeleteCanvas(id);

  const handleDelete = () => {
    deleteUserCanvas();
    onClose();
  };

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
            <ModalHeader className="flex flex-col gap-1">Alert</ModalHeader>
            <ModalBody>Confirm Delete?</ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                variant="light"
                onPress={onClose}
              >
                CANCEL
              </Button>
              <Button
                color="danger"
                onPress={handleDelete}
              >
                DELETE
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
