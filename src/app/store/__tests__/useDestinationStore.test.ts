import { useDestinationsStore } from '../destinations.store.ts';
import { mockDestinations } from '../../../../__mocks__/data.ts';

describe('useDestinationStore', () => {
  beforeEach(() => {
    useDestinationsStore.setState({
      destinations: [],
      loading: false,
    });
  });

  it('initial state is empty', () => {
    const state = useDestinationsStore.getState();
    expect(state.destinations).toEqual([]);
    expect(state.loading).toBe(false);
  });

  it('should set destinations correctly', () => {
    useDestinationsStore.getState().setDestinations(mockDestinations);
    expect(useDestinationsStore.getState().destinations).toEqual(
      mockDestinations,
    );
  });

  it('should set loading state correctly', () => {
    useDestinationsStore.getState().setLoading(true);
    expect(useDestinationsStore.getState().loading).toBe(true);
  });

  it('should return destination by id (root level)', () => {
    useDestinationsStore.getState().setDestinations(mockDestinations);
    const result = useDestinationsStore.getState().getDestinationById(1);
    expect(result?.name).toEqual('Europa');
  });

  it('should return destination by id (nested level)', () => {
    useDestinationsStore.getState().setDestinations(mockDestinations);
    const result = useDestinationsStore.getState().getDestinationById(3);
    expect(result?.name).toEqual('Japón');
  });

  it('should return undefined if destination not found', () => {
    useDestinationsStore.getState().setDestinations(mockDestinations);
    const result = useDestinationsStore.getState().getDestinationById(999);
    expect(result?.name).toBeUndefined();
  });
});
