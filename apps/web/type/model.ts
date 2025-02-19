import {Bounds, Coordinates} from './map';

export interface SocketMessage {
  userId: string;
  boardUuid: string;
  center: Coordinates;
  bounds: Bounds;
  zoom: number;
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

export interface Board {
  id: number;
  uuid: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}
