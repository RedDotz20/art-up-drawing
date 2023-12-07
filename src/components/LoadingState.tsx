import { Spinner } from '@nextui-org/react';

export default function LoadingState() {
  return (
    <div className="h-screen w-full bg-slate-800 opacity-90 flex gap-6 items-center justify-center">
      <Spinner
        size="lg"
        color="white"
      />
      <h1 className="text-white text-2xl">Loading...</h1>
    </div>
  );
}
