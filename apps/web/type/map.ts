export type NaverMap = naver.maps.Map;
type Lng = number;
type Lat = number;
export type Coordinates = {x: Lng, y: Lat};
export type Bounds = {min: Coordinates, max: Coordinates};

export type MapInfo = {
  center: Coordinates;
  bounds: Bounds;
  zoom: number;
}
