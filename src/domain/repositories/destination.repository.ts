import { Destination } from '../entities';

export interface DestinationRepository {
  fetchDestinations(): Promise<Destination[]>;
}
