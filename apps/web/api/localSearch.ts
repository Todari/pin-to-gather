import {LocalItem} from '@type/model';
import {http} from '@utils/http';
import {API_BASE_URL} from './config';

// type Sort = 'random' | 'comment';

export interface LocalSearchRequest {
  query: string;
  // display?: number;
  // start?: number;
  // sort?: Sort;
}

export interface LocalSearchResponse {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: LocalItem[];
}

export const getLocalSearch = ({params}: {params: LocalSearchRequest}) => {
  // const searchParams = new URLSearchParams({
  //   query: params.query,
  //   display: params.display?.toString() ?? '5',
  //   start: params.start?.toString() ?? '1',
  //   sort: params.sort ?? 'random',
  // });

  // const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  // const clientSecret = process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET;

  // if (!clientId || !clientSecret) {
  //   throw new Error('Naver API 인증 정보가 설정되지 않았습니다.');
  // }

  // return http.get<LocalSearchResponse>(`/naver-api/v1/search/local.json?${searchParams.toString()}`, {
  //   headers: {
  //     'X-Naver-Client-Id': clientId,
  //     'X-Naver-Client-Secret': clientSecret,
  //   },
  // });

  return http.get<LocalSearchResponse>(`${API_BASE_URL}/naver/local-search`, {
    params,
  });
};
