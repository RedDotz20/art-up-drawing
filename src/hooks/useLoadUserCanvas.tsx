import { useQuery } from '@tanstack/react-query';
import { loadCanvasApi } from '../api/canvasAPI';
import { useAuth0 } from '@auth0/auth0-react';

export function useLoadUserCanvas() {
  const { user } = useAuth0();
  const userAuthId = user!.sub!.substring(6);

  const loadUserCanvas = useQuery({
    queryKey: ['userCanvasList'],
    queryFn: () => loadCanvasApi(userAuthId),
    retry: 2,
    refetchOnMount: true,
  });

  return { loadUserCanvas };
}
