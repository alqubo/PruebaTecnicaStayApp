import { DestinationRepository } from '../../domain/repositories';
import { Destination } from '../../domain/entities';
import { DestinationApi } from '../http/destination.api.ts';
import { mapDestinationDtoToDomain } from '../mappers/destination.mapper.ts';

export const destinationRepositoryImpl: DestinationRepository = {
  fetchDestinations: async (): Promise<Destination[]> => {
    const destinations = await DestinationApi.fetchAll();
    return destinations.map(mapDestinationDtoToDomain);
  },
};
