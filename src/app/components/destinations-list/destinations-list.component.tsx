import { useCallback } from 'react';
import { View, FlatList, Text } from 'react-native';
import { DestinationsListSkeleton } from './destinations-list.skeleton.tsx';
import { DestinationItem } from '../destination-item';
import { Destination } from '../../../domain/entities';
import styles from './styles.ts';

const Separator = () => <View style={styles.separator} />;
const EmptyList = () => <Text>No se han encontrado resultados</Text>;

export const DestinationsList = ({
  destinations,
  loading,
}: {
  destinations: Destination[];
  loading: boolean;
}) => {
  const renderItem = useCallback(
    ({ item }: { item: Destination }) => (
      <DestinationItem key={`kDestination-${item.id}`} item={item} />
    ),
    [],
  );

  if (loading) {
    return <DestinationsListSkeleton />;
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={Separator}
      data={destinations}
      ListEmptyComponent={EmptyList}
      renderItem={renderItem}
    />
  );
};
