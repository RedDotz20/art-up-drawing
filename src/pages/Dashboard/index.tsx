import NavBar from './components/Navbar';
import CanvasCard from './components/CanvasCard';
import { Button } from '@nextui-org/react';
import { useGenerateCanvas } from '../../hooks/useGenerateCanvas';
import { useLoadUserCanvas } from '../../hooks/useLoadUserCanvas';

export default function Dashboard() {
  const { generateCanvasMutation, generateCanvas } = useGenerateCanvas();

  return (
    <section className="h-screen w-full ">
      <NavBar />
      <div className="px-12 py-8 text-white flex flex-col justify-center items-center">
        <div className="max-w-[726px] flex items-center w-full justify-between mb-6  text-white">
          <div>Recent Canvas</div>
          <Button
            color="success"
            isLoading={generateCanvasMutation.isPending}
            onClick={generateCanvas}
            size="sm"
          >
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

  if (loadUserCanvas.isLoading || loadUserCanvas.isPending) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="gap-2 grid items-center grid-cols-2 md:grid-cols-4 sm:grid-cols-3">
      {loadUserCanvas.isSuccess ? (
        <>
          {loadUserCanvas.data?.data.data.map((canvas: any) => (
            <CanvasCard
              key={canvas.id}
              name={canvas.name}
              createdAt={canvas.createdAt}
            />
          ))}
        </>
      ) : (
        <h1>No Canvas Found</h1>
      )}
    </div>
  );
}
