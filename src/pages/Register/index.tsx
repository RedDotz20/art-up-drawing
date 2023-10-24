import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Checkbox,
  Input,
} from "@nextui-org/react";

export default function Register() {

  return (
    <section className="flex flex-col justify-center items-center min-h-screen min-w-full">
      <Card className="py-4 px-2">
        <CardHeader className="flex flex-col items center px-4 pb-1">
          <h1 className="font-bold text-large">USER REGISTRATION</h1>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <form>
            <Input
              size="md"
              type="text"
              label="Username"
              variant="bordered"
              placeholder="Enter your username"
              className="mb-3"
            />
            <Input
              size="md"
              type="password"
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
              className="mb-3"
            />

            <Input
              size="md"
              type="password"
              label="Password"
              variant="bordered"
              placeholder="Confirm password"
              className="mb-2"
            />
            <Checkbox defaultSelected size="sm" className="mb-3">Accept Terms & Conditions</Checkbox>
          </form>
          <div className="flex gap-4 justify-center items-center">
            <Button color="default" className="w-4/5 px-2"> Cancel</Button>
            <Button color="primary" className="w-4/5 px-2">Sign Up</Button>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
