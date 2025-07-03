import { useEffect } from 'react';
import { fetchDestinations } from '../../domain/usecases/destination.usecase.ts';
import { destinationRepositoryImpl } from '../../infrastructure/repositories/destination.repository.ts';
import { useDestinationsStore } from '../store/destinations.store.ts';

export const useDestinations = () => {
  const { destinations, loading, setDestinations, setLoading } =
    useDestinationsStore();

  useEffect(() => {
    setLoading(true);
    fetchDestinations(destinationRepositoryImpl)
      .then(setDestinations)
      .catch(e => console.error(e))
      .finally(() => setLoading(false));
  }, [setDestinations, setLoading]);

  return {
    loading,
    destinations,
  };
};
