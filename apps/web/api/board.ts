import {http} from '@utils/http';
import {API_BASE_URL} from './config';
import {Board} from '@type/model';

export interface PostBoardRequest {
  title: string;
}

export type PostBoardResponse = Board;

export const postBoard = (boardTitle: string) => {
  return http.post<PostBoardRequest, PostBoardResponse>(`${API_BASE_URL}/board`, {title: boardTitle});
};

export type GetBoardResponse = Board;

export const getBoard = (boardUuid: string) => {
  return http.get<GetBoardResponse>(`${API_BASE_URL}/board/${boardUuid}`);
};
