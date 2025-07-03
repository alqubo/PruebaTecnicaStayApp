import { DestinationRepository } from '../repositories';
import { Destination } from '../entities';

export const fetchDestinations = async (
  destinationRepository: DestinationRepository,
): Promise<Destination[]> => {
  return await destinationRepository.fetchDestinations();
};
