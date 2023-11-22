// import { useEffect } from 'react';
import NavBar from './components/Navbar';
import CanvasCard from './components/CanvasCard';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { createCanvasAPi } from '../../api/canvasAPI';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

export default function Dashboard() {
  const { user } = useAuth0();
  const navigate = useNavigate();

  const generateCanvasMutation = useMutation({
    mutationFn: (userId: string, imageData?: string) => {
      return createCanvasAPi(userId, imageData);
    },
  });

  const generateCanvas = () => {
    const userAuthId = user!.sub!.substring(6);
    generateCanvasMutation.mutate(userAuthId);
  };

  useEffect(() => {
    if (generateCanvasMutation.data) {
      navigate(`/canvas/${generateCanvasMutation.data.data.data.id}`);
    }
  }, [generateCanvasMutation.data, navigate]);

  return (
    <section className="h-screen w -full ">
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
          <CanvasCard />
          <CanvasCard />
          <CanvasCard />
        </div>
      </div>
    </section>
  );
}
