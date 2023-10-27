import { useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

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
import { Profile } from '../../components/Icons/Profile';
import { Key } from '../../components/Icons/Key';

interface loginTypes extends FieldValues {
  username: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<loginTypes>();

  const formDataOnChange = watch('username');
  console.log(formDataOnChange);

  const [isVisible, setIsVisible] = useState(false);
  const [isRemember, setIsRemember] = useState(true);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit: SubmitHandler<loginTypes> = async (data) => {
    try {
      console.log(data);
    } catch (err) {
      console.error(err);
    } finally {
    }
  };

  const userNameError = {
    requiredError: errors.username?.type === 'required',
  };

  const passwordError = {
    requiredError: errors.password?.type === 'required',
    minLengthError: errors.password?.type === 'minLength',
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen min-w-full">
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <h1 className="font-bold text-large">SIGN IN</h1>
        </CardHeader>
        <CardBody className="overflow-visible">
          <form
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              isClearable
              id="username"
              className="max-w-xs mb-2"
              type="text"
              size="sm"
              label="Username"
              variant="bordered"
              labelPlacement="outside"
              placeholder="Username"
              isInvalid={userNameError.requiredError}
              errorMessage={
                userNameError.requiredError && 'Username is Required'
              }
              startContent={<Profile isError={userNameError.requiredError} />}
              {...register('username', { required: true })}
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
              isInvalid={passwordError.requiredError}
              errorMessage={
                passwordError.requiredError && 'Password is Required'
              }
              {...register('password', {
                required: 'Password is Required',
                min: 8,
              })}
              startContent={<Key isError={passwordError.requiredError} />}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-xl text-default-400 pointer-events-none" />
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
              isLoading={false}
            >
              Sign In
            </Button>
          </form>
        </CardBody>
      </Card>
    </section>
  );
}
