import {
  Card,
  CardBody,
  CardFooter,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
} from '@nextui-org/react';
import { FaPencilRuler } from 'react-icons/fa';
import { SlOptions } from 'react-icons/sl';
import { formatDateAndTime } from '../../../utils/formatDateAndTime';
import { useEditSelectedCanvas } from '../../../hooks/useEditSelectedCanvas';

import DeleteCanvasModal from '../../../components/DeleteCanvasModal';

interface CanvasCardProps {
  id: string;
  name: string;
  createdAt: string;
}

export default function CanvasCard({ id, name, createdAt }: CanvasCardProps) {
  const { editSelectedCanvas } = useEditSelectedCanvas(id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => onOpen();

  return (
    <>
      <DeleteCanvasModal
        id={id}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Card
        shadow="sm"
        isPressable={true}
      >
        <CardBody
          className="overflow-visible p-0"
          onClick={editSelectedCanvas}
        >
          <div className="w-full object-cover h-[120px] flex items-center justify-center">
            <FaPencilRuler size={50} />
          </div>
        </CardBody>
        <CardFooter
          className="text-small justify-between"
          onClick={() => console.log('presed pressed')}
        >
          <div className="flex flex-col items-start mr-4">
            <b>{name}</b>
            <p className="text-default-500 text-xs">
              {formatDateAndTime(createdAt)}
            </p>
          </div>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <div>
                <SlOptions
                  className="text-md pointer-events-none flex-shrink-0 bg-blue-400 p-1 rounded-lg text-white"
                  size={30}
                />
              </div>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              variant="flat"
            >
              <DropdownItem key="edit">Rename</DropdownItem>
              <DropdownItem
                key="delete"
                className="text-danger"
                color="danger"
                onClick={() => handleOpen()}
              >
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardFooter>
      </Card>
    </>
  );
}
