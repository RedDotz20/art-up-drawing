import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

export default function CanvasCard() {
  return (
    <div>
      <Card
        shadow="sm"
        isPressable
        onPress={() => console.log('item pressed')}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100"
            height="50"
            alt="test"
            className="w-full object-cover h-[140px]"
            // src={item.img}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>title</b>
          <p className="text-default-500">description</p>
        </CardFooter>
      </Card>
    </div>
  );
}
