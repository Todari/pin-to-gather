import {LocalItem} from '@type/model';
import {http} from '@utils/http';

type Sort = 'random' | 'comment';

export interface LocalSearchRequest {
  query: string;
  display?: number;
  start?: number;
  sort?: Sort;
}

export interface LocalSearchResponse {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: LocalItem[];
}

export const getLocalSearch = ({params}: {params: LocalSearchRequest}) => {
  const searchParams = new URLSearchParams({
    query: params.query,
    display: params.display?.toString() ?? '5',
    start: params.start?.toString() ?? '1',
    sort: params.sort ?? 'random',
  });

  return http.get<LocalSearchResponse>(`/naver-api/v1/search/local.json?${searchParams.toString()}`, {
    headers: {
      'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
    },
  });
};
