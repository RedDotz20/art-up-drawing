import { useState } from 'react';
import {
  Card,
  Button,
  Input,
  CardHeader,
  CardBody,
  Checkbox,
} from '@nextui-org/react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

import { EyeFilledIcon } from '../../components/Icons/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../../components/Icons/EyeSlashFilledIcon';
import { Profile } from '../../components/Icons/Profile';
import { Key } from '../../components/Icons/Key';

interface loginTypes extends FieldValues {
  username: string;
  password: string;
  // remember: boolean;
}

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRemember, setIsRemember] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginTypes>();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit: SubmitHandler<loginTypes> = async (data) => {
    try {
      console.log(data);
    } catch (err) {
      console.error(err);
    } finally {
    }
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen min-w-full">
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <h1 className="font-bold text-large">SIGN IN</h1>
        </CardHeader>
        <CardBody className="overflow-visible ">
          <form
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              id="username"
              type="text"
              size="sm"
              label="Username"
              variant="bordered"
              labelPlacement="outside"
              placeholder="Username"
              className="max-w-xs mb-2"
              startContent={<Profile />}
              {...register('username', {
                required: 'Username is required',
              })}
            />

            <Input
              id="password"
              size="sm"
              label="Password"
              variant="bordered"
              labelPlacement="outside"
              placeholder="Password"
              description=""
              radius="sm"
              startContent={<Key />}
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

            <Button
              type="submit"
              color="primary"
            >
              Sign In
            </Button>
          </form>
        </CardBody>
      </Card>
    </section>
  );
}
