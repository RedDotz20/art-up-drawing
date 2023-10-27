import { Input } from '@nextui-org/react';
import { useController, UseControllerProps } from 'react-hook-form';

type loginTypes = {
  username: string;
  password: string;
};

interface ControlledInputProps extends UseControllerProps<loginTypes> {
  id: string;
  rest: any;
}

export default function ControlledInput(props: ControlledInputProps) {
  const { id, rest } = props;
  const { field, fieldState } = useController(props);

  const formattedName = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <>
      <Input
        size="sm"
        variant="bordered"
        labelPlacement="outside"
        id={id}
        label={formattedName}
        placeholder={formattedName}
        {...field}
        {...rest}
      />
      <p>{fieldState.isTouched && 'Touched'}</p>
      <p>{fieldState.isDirty && 'Dirty'}</p>
      <p>{fieldState.invalid ? 'invalid' : 'valid'}</p>
    </>
  );
}
