import { Bounds, Coordinates } from "./map";

export interface SocketMessage {
  userId: string;
  boardUuid: string;
  center: Coordinates;
  bounds: Bounds;
  zoom: number;
}
