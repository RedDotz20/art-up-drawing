import { useQueryClient } from '@tanstack/react-query';

export const useGetFetchQuery = (queryName: string) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData([queryName]);
};
