
export interface GeoLocation {
  latitude: string | number;
  longitude: string | number;
}


export interface Polo {
  id: number;
  distance: string;
  name: string;
  address: string;
  city: string;
  state: string;
  location: GeoLocation;
}
