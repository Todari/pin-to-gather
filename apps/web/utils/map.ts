import {Bounds, Coordinates} from '@type/map';

export const localMapXYToLatLng = (mapX: string, mapY: string): Coordinates => {
  return {x: Number(mapX) / 10000000, y: Number(mapY) / 10000000};
};

export const boundsToNaverBounds = (bounds: Bounds) => {
  return new window.naver.maps.LatLngBounds(
    new window.naver.maps.LatLng(bounds.min.x, bounds.min.y),
    new window.naver.maps.LatLng(bounds.max.x, bounds.max.y),
  );
};

export const coordToNaverLatLng = (coordinates: Coordinates) => {
  return new window.naver.maps.LatLng(coordinates.x, coordinates.y);
};
