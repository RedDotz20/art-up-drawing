import { useState } from 'react';
import {
  Card,
  Button,
  Input,
  CardHeader,
  CardBody,
  Checkbox,
} from '@nextui-org/react';

import { EyeFilledIcon } from '../../components/Icons/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../../components/Icons/EyeSlashFilledIcon';

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRemember, setIsRemember] = useState(true);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className="flex flex-col justify-center items-center min-h-screen min-w-full">
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <h1 className="font-bold text-large">USER LOGIN</h1>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Input
            size="md"
            type="email"
            label="Email"
            variant="bordered"
            placeholder="Enter your email"
            className="mb-4"
          />

          <Input
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? 'text' : 'password'}
            className="max-w-xs mb-2"
          />

          <Checkbox
            className="mb-2"
            isSelected={isRemember}
            onValueChange={setIsRemember}
            size="sm"
          >
            Remember me
          </Checkbox>

          <Button color="primary">Sign In</Button>
        </CardBody>
      </Card>
    </section>
  );
}
