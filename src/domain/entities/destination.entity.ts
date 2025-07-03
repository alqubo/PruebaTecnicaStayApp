export interface Destination {
  id: number;
  parentId?: number;
  isTop: boolean;
  coords: {
    lat: number;
    lng: number;
  };
  name: string;
  photographs: string[];
  numEstablishments?: number;
  children: Destination[];
  isFinalNode: boolean;
}
