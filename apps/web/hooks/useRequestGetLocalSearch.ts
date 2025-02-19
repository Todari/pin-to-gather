import {useQuery} from '@tanstack/react-query';
import {getLocalSearch} from '@api/localSearch';
import {QUERY_KEY} from '@constants/queryKey';

export const useRequestGetLocalSearch = (query: string) => {
  const {data, ...rest} = useQuery({
    queryKey: [QUERY_KEY.localeSearch, query],
    queryFn: () => getLocalSearch({params: {query}}),
    enabled: !!query,
    select: data => ({
      ...data,
      items: data.items.map(item => ({
        ...item,
        title: item.title.replace(/<b>/g, '').replace(/<\/b>/g, ''),
      })),
    }),
  });

  return {data, ...rest};
};
