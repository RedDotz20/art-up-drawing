import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCanvasApi } from '../api/canvasAPI';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export function useGenerateCanvas() {
  const { user } = useAuth0();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const generateCanvasMutation = useMutation({
    mutationFn: (userId: string) => {
      return createCanvasApi(userId);
    },
    onSuccess: (newImageData) => {
      //? update data view directly via setQueryData
      queryClient.setQueryData(['userCanvasList'], newImageData);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const generateCanvas = () => {
    const userAuthId = user!.sub!.substring(6);
    const newCanvas = generateCanvasMutation.mutate(userAuthId);
    return newCanvas;
  };

  useEffect(() => {
    if (generateCanvasMutation.data && generateCanvasMutation.isSuccess) {
      const generatedCanvasId = generateCanvasMutation.data.data.data.id;
      navigate(`/canvas/${generatedCanvasId}`);
    }
  }, [generateCanvasMutation.data, navigate]);

  return { generateCanvasMutation, generateCanvas };
}
