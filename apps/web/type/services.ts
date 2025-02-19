import {Bounds, Coordinates} from './map';

export interface SocketMessage {
  userId: string;
  boardUuid: string;
  center: Coordinates;
  bounds: Bounds;
  zoom: number;
}

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

export interface LocalItem {
  title: string;
  link?: string;
  category?: string;
  description?: string;
  telephone?: string;
  address?: string;
  roadAddress: string;
  mapx: string;
  mapy: string;
}
