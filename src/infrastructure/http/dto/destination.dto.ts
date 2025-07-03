export interface DestinationDto {
  id: number;
  childs: DestinationDto[];
  destinationData: DestinationDataDto;
  fatherDestination: number;
  isTop: boolean;
  isFinalNode?: boolean;
  numEstablishments?: number;
}

export interface DestinationDataDto {
  translatableName: Record<string, string>;
  photographs: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
