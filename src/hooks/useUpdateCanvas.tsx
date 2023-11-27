import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCanvasApi } from '../api/canvasAPI';
import { useParams } from 'react-router-dom';

interface canvasData {
  canvasId: string;
  imageData: string;
}

export function useUpdateCanvas(
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>
) {
  const { canvasId } = useParams<{ canvasId: string }>();
  const queryClient = useQueryClient();

  const updateCanvasMutation = useMutation({
    mutationFn: (canvas: canvasData) => {
      return updateCanvasApi(canvas);
    },
    onSuccess: (newImageData) => {
      //? update data view directly via setQueryData
      queryClient.setQueryData(['userCanvasList'], newImageData);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const updateCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas && canvasId) {
      const imageData = canvas.toDataURL();
      const canvasData = { canvasId, imageData };
      updateCanvasMutation.mutate(canvasData);
    }
  };

  return {
    updateCanvasMutation,
    updateCanvas,
  };
}
