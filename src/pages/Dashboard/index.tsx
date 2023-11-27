import NavBar from './components/Navbar';
import CanvasCard from './components/CanvasCard';
import { Button } from '@nextui-org/react';
import { useGenerateCanvas } from '../../hooks/useGenerateCanvas';

export default function Dashboard() {
  const { generateCanvasMutation, generateCanvas } = useGenerateCanvas();

  return (
    <section className="h-screen w-full ">
      <NavBar />
      <div className="px-12 py-8 text-white">
        <div className="flex items-center w-full justify-between mb-6">
          <div className="">Recent Canvas</div>
          <Button
            isLoading={generateCanvasMutation.isPending}
            onClick={generateCanvas}
            size="sm"
          >
            Create Canvas
          </Button>
          {generateCanvasMutation.isSuccess && <>successfully add</>}
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center px-4">
          <CanvasCard name="untitled" />
        </div>
      </div>
    </section>
  );
}
