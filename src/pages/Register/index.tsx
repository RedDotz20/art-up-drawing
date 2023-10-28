import { useState } from 'react';
import {
  useForm,
  Controller,
  FieldValues,
  SubmitHandler,
} from 'react-hook-form';

import { useNavigate } from 'react-router-dom';

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

interface registerTypes extends FieldValues {
  username: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<registerTypes>({
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = useState(false);

  const togglePassVisible = () => setIsPassVisible(!isPassVisible);
  const toggleConfirmPassVisible = () =>
    setIsConfirmPassVisible(!isConfirmPassVisible);

  const onSubmit: SubmitHandler<registerTypes> = async (data) => {
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

  const confirmPasswordError = {
    requiredError: errors.confirmPassword?.type === 'required',
    // minLengthError: errors.confirmPassword?.type === 'minLength',
    // isMatchError: errors.confirmPassword?.type === 'isMatch',
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen min-w-full">
      <Card>
        <CardHeader className="pb-0 pt-4 px-4 flex-col items-center">
          <h1 className="font-bold text-large">Sign Up</h1>
        </CardHeader>
        <CardBody className="overflow-visible">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  isClearable
                  onClear={() => field.onChange('')}
                  type="text"
                  size="sm"
                  label="New Username"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="New Username"
                  className="max-w-xs mb-2"
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
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  type={isPassVisible ? 'text' : 'password'}
                  size="sm"
                  label="New Password"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="New Password"
                  className="max-w-xs mb-2"
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
                      onClick={togglePassVisible}
                    >
                      {isPassVisible ? (
                        <EyeSlashFilledIcon className="text-xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  type={isConfirmPassVisible ? 'text' : 'password'}
                  size="sm"
                  label="Confirm Password"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Confirm Password"
                  className="max-w-xs mb-4"
                  isInvalid={
                    confirmPasswordError.requiredError ||
                    passwordError.minLengthError
                  }
                  errorMessage={
                    confirmPasswordError.requiredError && 'Password is Required'
                  }
                  startContent={
                    <Key isError={confirmPasswordError.requiredError} />
                  }
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleConfirmPassVisible}
                    >
                      {isConfirmPassVisible ? (
                        <EyeSlashFilledIcon className="text-xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                />
              )}
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
            <span
              className="cursor-pointer select-none underline-offset-4 text-blue-500 hover:text-blue-700"
              onClick={() => navigate('/login')}
            >
              LOGIN
            </span>
          </h2>
        </CardBody>
      </Card>
    </section>
  );
}
