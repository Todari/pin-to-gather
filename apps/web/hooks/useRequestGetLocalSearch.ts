import { useQuery } from "@tanstack/react-query";
import { getLocalSearch } from "@api/localSearch";

export const useRequestGetLocalSearch = (query: string) => {
  const {data, ...rest} = useQuery({
    queryKey: ['localSearch'],
    queryFn: () => getLocalSearch({params: {query}}),
    enabled: !!query,
  })

  return {data, ...rest}
}