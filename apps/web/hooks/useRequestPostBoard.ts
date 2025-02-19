import {useMutation, useQueryClient} from '@tanstack/react-query';
import {postBoard} from '@api/board';
import {QUERY_KEY} from '@constants/queryKey';

export const useRequestPostBoard = () => {
  const queryClient = useQueryClient();
  const {mutate, ...rest} = useMutation({
    mutationFn: (boardTitle: string) => postBoard(boardTitle),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEY.board]});
    },
  });

  return {mutate, ...rest};
};
