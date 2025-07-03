import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDestinationsStore } from '../../store/destinations.store.ts';
import { Destination } from '../../../domain/entities';
import { formatCoords } from '../../../shared/utils/coords.utils.ts';
import styles from './styles.ts';
import { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators/app.navigator.tsx';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export const DetailsScreen = ({ route }: Props) => {
  const navigation = useNavigation();
  const { id } = route.params;

  const destination: Destination | undefined = useDestinationsStore(store =>
    store.getDestinationById(id),
  );

  useEffect(() => {
    if (destination) {
      navigation.setOptions({
        title: destination.name,
      });
    }
  }, [navigation, destination]);

  if (!destination) {
    return (
      <View style={styles.container}>
        <Text>No se ha podido encontrar el destino</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{destination.name}</Text>

      <View style={styles.cards}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Establecimientos</Text>
          <Text style={styles.cardValue}>{destination.numEstablishments}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Posición</Text>
          <Text style={styles.cardValue}>
            {formatCoords(destination.coords.lat, destination.coords.lng)}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Fotos</Text>
          <Text style={styles.cardValue}>
            {destination.photographs.join(', ')}
          </Text>
        </View>
      </View>
    </View>
  );
};
