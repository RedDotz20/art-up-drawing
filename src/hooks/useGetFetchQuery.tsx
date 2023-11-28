import { useQueryClient } from '@tanstack/react-query';

export const useGetFetchQuery = (queryName: string) => {
  const queryClient = useQueryClient();
  const data: any = queryClient.getQueryData([queryName]);
  return data;
};
