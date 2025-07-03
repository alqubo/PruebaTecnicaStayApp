import { DestinationDto } from '../http/dto/destination.dto.ts';
import { Destination } from '../../domain/entities';

export const mapDestinationDtoToDomain = (
  destinationDto: DestinationDto,
): Destination => ({
  id: destinationDto.id,
  parentId:
    destinationDto.fatherDestination === 0
      ? undefined
      : destinationDto.fatherDestination,
  isTop: destinationDto.isTop,
  coords: {
    lat: destinationDto.destinationData.coordinates.latitude,
    lng: destinationDto.destinationData.coordinates.longitude,
  },
  name:
    destinationDto.destinationData.translatableName.es ||
    destinationDto.destinationData.translatableName.en,
  photographs: destinationDto.destinationData.photographs,
  numEstablishments: destinationDto.numEstablishments,
  children: destinationDto.childs
    ? destinationDto.childs.map(child => mapDestinationDtoToDomain(child))
    : [],
  isFinalNode: destinationDto.isFinalNode ?? false,
});
