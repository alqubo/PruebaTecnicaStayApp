import { Destination } from '../../domain/entities';
import { create } from 'zustand/react';

export type DestinationsState = {
  destinations: Destination[];
  loading: boolean;
  setDestinations: (destinations: Destination[]) => void;
  setLoading: (loading: boolean) => void;
  getDestinationById: (id: number) => Destination | undefined;
};

function findDestinationById(
  destinations: Destination[],
  id: number,
): Destination | undefined {
  for (const dest of destinations) {
    if (dest.id === id) return dest;
    if (dest.children) {
      const found = findDestinationById(dest.children, id);
      if (found) return found;
    }
  }
  return undefined;
}

export const useDestinationsStore = create<DestinationsState>(set => ({
  destinations: [],
  loading: false,

  setDestinations: destinations => set({ destinations }),
  setLoading: loading => set({ loading }),
  getDestinationById: (id: number): Destination | undefined => {
    const { destinations } = useDestinationsStore.getState();
    return findDestinationById(destinations, id);
  },
}));
