import { Card, CardHeader } from '@nextui-org/react';
import { FaPencilRuler } from 'react-icons/fa';
import { SlOptions } from 'react-icons/sl';

interface CanvasCardProps {
  name: string;
}

export default function CanvasCard({ name }: CanvasCardProps) {
  return (
    <Card
      isHoverable
      className="min-w-[300px] flex items-center justify-center cursor-pointer"
    >
      <CardHeader className="flex gap-6">
        <div className="pl-2">
          <FaPencilRuler size={20} />
        </div>
        <div className="flex flex-col">
          <p className="text-md select-none">{name}</p>
        </div>
        <div
          className="ml-auto mr-2"
          onClick={() => console.log('hello')}
        >
          <SlOptions />
        </div>
      </CardHeader>
    </Card>
  );
}
