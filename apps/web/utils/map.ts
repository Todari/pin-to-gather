import { Coordinates } from "@type/map";

export const localMapXYToLatLng = (mapX: string, mapY: string): Coordinates => {
  return {x: Number(mapX)/1000000, y: Number(mapY)/1000000};
}