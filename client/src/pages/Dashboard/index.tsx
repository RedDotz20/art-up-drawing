import { useEffect } from 'react';
import { Button } from '@nextui-org/react';
import { useGenerateCanvas } from '../../hooks/useGenerateCanvas';
import { useLoadUserCanvas } from '../../hooks/useLoadUserCanvas';
import { useActiveUserCanvasStore } from '../../store/activeUserCanvasStore';
import NavBar from './components/Navbar';
import CanvasCard from './components/CanvasCard';

interface CanvasInterface {
  id: string;
  name: string;
  createdAt: string;
}

export default function Dashboard() {
  const activeUserCanvas = useActiveUserCanvasStore();
  const { generateCanvasMutation, generateCanvas } = useGenerateCanvas();

  useEffect(() => {
    if (activeUserCanvas.activeImageData) {
      activeUserCanvas.setActiveImageData(null);
    }
  }, [activeUserCanvas]);

  return (
    <section className="h-screen w-full ">
      <NavBar />
      <div className="px-12 py-8 text-white flex flex-col justify-center items-center">
        <div className="max-w-[726px] flex items-center w-full justify-between mb-6  text-white">
          <div>Recent Canvas</div>
          <Button color="success" isLoading={generateCanvasMutation.isPending} onClick={generateCanvas} size="sm">
            Create Canvas
          </Button>
        </div>
        <div className="w-full flex justify-center">
          <UserCanvasData />
        </div>
      </div>
    </section>
  );
}

function UserCanvasData() {
  const { loadUserCanvas } = useLoadUserCanvas();
  console.log(loadUserCanvas.data);

  if (loadUserCanvas.isLoading || loadUserCanvas.isPending) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {loadUserCanvas.isSuccess && loadUserCanvas.data?.data ? (
        <div className="gap-2 grid items-center grid-cols-2 md:grid-cols-4 sm:grid-cols-3">
          {loadUserCanvas.data?.data.data.map((canvas: CanvasInterface) => (
            <CanvasCard key={canvas.id} id={canvas.id} name={canvas.name} createdAt={canvas.createdAt} />
          ))}
        </div>
      ) : (
        <div className="text-center mx-auto">
          <h1>Failed To Load Canvas</h1>
        </div>
      )}
    </>
  );
}
