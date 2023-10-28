import { useState } from 'react';
import {
  useForm,
  Controller,
  FieldValues,
  SubmitHandler,
} from 'react-hook-form';

import { useNavigate } from 'react-router-dom';

import {
  Card,
  Button,
  Input,
  CardHeader,
  CardBody,
  Checkbox,
  Divider,
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
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<loginTypes>({
    defaultValues: {
      username: '',
      password: '',
      rememberme: false,
    },
  });

  const [isVisible, setIsVisible] = useState(false);
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
            <Controller
              name="username"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  isClearable
                  onClear={() => field.onChange('')}
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
                  startContent={
                    <Profile isError={userNameError.requiredError} />
                  }
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{ required: true, minLength: 8 }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="password"
                  size="sm"
                  label="Password"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Password"
                  description=""
                  radius="sm"
                  isInvalid={
                    passwordError.requiredError || passwordError.minLengthError
                  }
                  errorMessage={
                    (passwordError.requiredError && 'Password is Required') ||
                    (passwordError.minLengthError &&
                      'Password must be at least 8 characters')
                  }
                  startContent={
                    <Key
                      isError={
                        passwordError.requiredError ||
                        passwordError.minLengthError
                      }
                    />
                  }
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
              )}
            />

            <Controller
              name="rememberme"
              control={control}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  className="mb-2"
                  isSelected={field.value}
                  onValueChange={() => field.onChange(!field.value)}
                  size="sm"
                >
                  Remember me
                </Checkbox>
              )}
            />

            <Button
              type="submit"
              color="primary"
              isLoading={false}
            >
              SIGN IN
            </Button>
          </form>
          <Divider className="my-2" />

          <h2 className="text-xs text-center font-semibold">
            Don't have an Account? Register{'  '}
            <span
              className="cursor-pointer select-none underline-offset-4 text-blue-500 hover:text-blue-700"
              onClick={() => navigate('/register')}
            >
              Here
            </span>
          </h2>
        </CardBody>
      </Card>
    </section>
  );
}
