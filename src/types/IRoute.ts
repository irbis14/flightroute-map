export interface ITimedPoint {
  timestamp: number;
  lng: number;
  lat: number;
}

export interface IRoute {
  route_points: ITimedPoint[];
}
