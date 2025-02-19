export type NaverMap = naver.maps.Map;
export type NaverRectangle = naver.maps.Rectangle;
type Lng = number;
type Lat = number;
export type Coordinates = {x: Lat; y: Lng};
export type Bounds = {min: Coordinates; max: Coordinates};

export type MapInfo = {
  center: Coordinates;
  bounds: Bounds;
  zoom: number;
};
