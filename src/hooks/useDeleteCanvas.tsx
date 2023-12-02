import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { deleteCanvasApi } from '../api/canvasAPI';
import { useActiveUserCanvasStore } from '../store/activeUserCanvasStore';

export default function useDeleteCanvas(id: string) {
  const { user } = useAuth0();
  const userAuthId = user!.sub!.substring(6);
  const activeUserCanvas = useActiveUserCanvasStore();
  // const navigate = useNavigate();

  const deleteCanvasMutation = useMutation({
    mutationFn: (canvas: { userId: string; canvasId: string }) => {
      return deleteCanvasApi(canvas);
    },
    onSuccess: () => {
      activeUserCanvas.setActiveImageData(null);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const deleteUserCanvas = () => {
    const canvasData = { userId: userAuthId, canvasId: id };
    deleteCanvasMutation.mutate(canvasData);
  };

  // useEffect(() => {
  //   if (deleteCanvasMutation.data && deleteCanvasMutation.isSuccess) {
  //     navigate(`/canvas/${id}`);
  //   }
  // }, [editCanvasMutation.data, navigate]);

  return { deleteUserCanvas };
}
