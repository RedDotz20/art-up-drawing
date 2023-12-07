import { useAuth0 } from '@auth0/auth0-react';
// import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCanvasApi } from '../api/canvasAPI';
import { useActiveUserCanvasStore } from '../store/activeUserCanvasStore';
import { useNavigate } from 'react-router-dom';

export default function useDeleteCanvas(id: string) {
  const queryClient = useQueryClient();
  const { user } = useAuth0();
  const userAuthId = user!.sub!.substring(6);
  const activeUserCanvas = useActiveUserCanvasStore();
  const navigate = useNavigate();

  const deleteCanvasMutation = useMutation({
    mutationFn: (canvas: { userId: string; canvasId: string }) => {
      return deleteCanvasApi(canvas);
    },
    onSuccess: () => {
      activeUserCanvas.setActiveImageData(null);
      queryClient.invalidateQueries({ queryKey: ['userCanvasList'] });
      navigate('/home');
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

  return { deleteCanvasMutation, deleteUserCanvas };
}
