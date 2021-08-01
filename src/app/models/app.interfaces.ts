export interface IVehicle {
  name: string;
  total_no: number;
  max_distance: number;
  speed: number;
}

export interface IPlanet {
  name: string;
  distance: number;
}

export interface IFalcon {
  status: string;
  planet_name?: string;
}
