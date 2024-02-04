import { useQuery } from '@tanstack/react-query';
import { useAuth0 } from '@auth0/auth0-react';
import { loadCanvasApi } from '../api/canvasAPI';

export function useLoadUserCanvas() {
  const { user } = useAuth0();
  const userAuthId = user!.sub!.substring(6);

  const loadUserCanvas = useQuery({
    queryKey: ['userCanvasList'],
    queryFn: () => loadCanvasApi(userAuthId),
    retry: 4,
    refetchOnMount: 'always',
    staleTime: Infinity,
  });

  return { loadUserCanvas };
}
