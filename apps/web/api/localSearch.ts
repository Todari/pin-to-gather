import { LocalSearchRequest } from "@type/services";
import { http } from "@utils/http";

export const getLocalSearch = ({params}: {params: LocalSearchRequest}) => {
  const searchParams = new URLSearchParams({
    query: params.query,
    display: params.display?.toString() ?? '5',
    start: params.start?.toString() ?? '1',
    sort: params.sort ?? 'random',
  });

  return http.get(`/naver-api/v1/search/local.json?${searchParams.toString()}`, {
    headers: {
      'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
    },
  })
}