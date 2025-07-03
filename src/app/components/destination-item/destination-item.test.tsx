import React, { act } from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import { DestinationItem } from './index.tsx';
import { mockDestinations } from '../../../../__mocks__/data.ts';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('DestinationItem', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({ navigate: navigateMock });
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <DestinationItem item={mockDestinations[0]} />,
    );
    expect(getByText('Europa')).toBeTruthy();
    expect(getByText('27.9202° N, 15.5474° W')).toBeTruthy();
  });

  it('renders correctly isTop destination', () => {
    const { getByText } = render(
      <DestinationItem item={mockDestinations[2]} />,
    );
    expect(getByText('TOP')).toBeTruthy();
  });

  it('navigates when pressed if it is a final node', () => {
    const { getByText } = render(
      <DestinationItem item={mockDestinations[0]} />,
    );

    act(() => {
      fireEvent.press(getByText('Europa'));
    });

    expect(navigateMock).toHaveBeenCalledWith('Details', { id: 1 });
  });

  it('expands children when pressed if it is not a final node', () => {
    const { getByText, queryByText } = render(
      <DestinationItem item={mockDestinations[1]} />,
    );
    expect(queryByText('Japón')).toBeNull();

    act(() => {
      fireEvent.press(getByText('Asia'));
    });

    expect(getByText('Japón')).toBeTruthy();
  });

  it('renders nothing if item is null', () => {
    const { toJSON } = render(<DestinationItem item={null as any} />);
    expect(toJSON()).toBeNull();
  });
});
