import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useActiveUserCanvasStore } from '../store/activeUserCanvasStore';
import { editCanvasApi } from '../api/canvasAPI';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export function useEditSelectedCanvas(id: string) {
  const { user } = useAuth0();
  const userAuthId = user!.sub!.substring(6);
  const activeUserCanvas = useActiveUserCanvasStore();
  const navigate = useNavigate();

  const editCanvasMutation = useMutation({
    mutationFn: (canvas: { userId: string; canvasId: string }) => {
      return editCanvasApi(canvas);
    },
    onSuccess: (canvasData) => {
      if (canvasData) {
        const imageData = canvasData.data.data.imageData;
        activeUserCanvas.setActiveImageData(imageData);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const editSelectedCanvas = () => {
    const canvasData = { userId: userAuthId, canvasId: id };
    editCanvasMutation.mutate(canvasData);
  };

  useEffect(() => {
    if (editCanvasMutation.data && editCanvasMutation.isSuccess) {
      const imageData = editCanvasMutation.data.data.data.imageData;
      activeUserCanvas.setActiveImageData(imageData);
      console.log('state:', activeUserCanvas.activeImageData);

      navigate(`/canvas/${id}`);
    }
  }, [editCanvasMutation.data, navigate]);

  return { editSelectedCanvas };
}
