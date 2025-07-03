import React from 'react';
import { render } from '@testing-library/react-native';
import { DestinationsList } from './index.tsx';
import { Destination } from '../../../domain/entities';
import { mockDestinations } from '../../../../__mocks__/data.ts';

jest.mock('./destinations-list.skeleton.tsx', () => ({
  DestinationsListSkeleton: () => <></>,
}));

jest.mock('../destination-item', () => ({
  DestinationItem: ({ item }: { item: Destination }) => {
    const { Text } = require('react-native');
    return (
      <>
        <Text>{item.name}</Text>
      </>
    );
  },
}));

describe('DestinationsList', () => {
  it('renders skeleton when loading is true', () => {
    const { UNSAFE_queryByType } = render(
      <DestinationsList destinations={[]} loading={true} />,
    );

    expect(
      UNSAFE_queryByType(
        require('./destinations-list.skeleton.tsx').DestinationsListSkeleton,
      ),
    ).toBeTruthy();
  });

  it('shows not found text when no destinations and not loading', () => {
    const { getByText } = render(
      <DestinationsList destinations={[]} loading={false} />,
    );

    expect(getByText('No se han encontrado resultados')).toBeTruthy();
  });

  it('renders DestinationItem for each destination', () => {
    const { getByText } = render(
      <DestinationsList destinations={mockDestinations} loading={false} />,
    );

    expect(getByText('Europa')).toBeTruthy();
    expect(getByText('Asia')).toBeTruthy();
    expect(getByText('Latam')).toBeTruthy();
  });
});
