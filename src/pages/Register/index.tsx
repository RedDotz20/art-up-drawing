import { useState } from 'react';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Input,
  Divider,
} from '@nextui-org/react';

import { EyeFilledIcon } from '../../components/Icons/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../../components/Icons/EyeSlashFilledIcon';
import { Profile } from '../../components/Icons/Profile';
import { Key } from '../../components/Icons/Key';

export default function Register() {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = useState(false);

  const togglePassVisible = () => setIsPassVisible(!isPassVisible);
  const toggleConfirmPassVisible = () =>
    setIsConfirmPassVisible(!isConfirmPassVisible);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen min-w-full">
      <Card>
        <CardHeader className="pb-0 pt-4 px-4 flex-col items-center">
          <h1 className="font-bold text-large">Sign Up</h1>
        </CardHeader>
        <CardBody className="overflow-visible">
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              size="sm"
              label="New Username"
              variant="bordered"
              labelPlacement="outside"
              placeholder="New Username"
              className="max-w-xs mb-2"
              startContent={<Profile />}
            />

            <Input
              size="sm"
              label="New Password"
              variant="bordered"
              labelPlacement="outside"
              placeholder="New Password"
              description=""
              radius="sm"
              startContent={<Key />}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={togglePassVisible}
                >
                  {isPassVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isPassVisible ? 'text' : 'password'}
              className="max-w-xs mb-2"
            />

            <Input
              size="sm"
              label="Re-Type New Password"
              variant="bordered"
              labelPlacement="outside"
              placeholder="Re-Type New Password"
              description=""
              radius="sm"
              startContent={<Key />}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleConfirmPassVisible}
                >
                  {isConfirmPassVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isConfirmPassVisible ? 'text' : 'password'}
              className="max-w-xs mb-4"
            />

            <Button
              size="sm"
              type="submit"
              color="primary"
              radius="sm"
              className="w-full"
            >
              SIGN UP
            </Button>
          </form>

          <Divider className="my-2" />

          <h2 className="text-xs text-center font-semibold">
            Already have an Account?{'  '}
            <span className="cursor-pointer select-none underline-offset-4 text-blue-500 hover:text-blue-700">
              LOGIN
            </span>
          </h2>
        </CardBody>
      </Card>
    </section>
  );
}
