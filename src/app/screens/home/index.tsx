import { View } from 'react-native';
import { DestinationsList } from '../../components/destinations-list';
import { useDestinations } from '../../hooks/destionations.hooks.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators/app.navigator.tsx';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({}: Props) => {
  const { destinations, loading } = useDestinations();

  return (
    <View>
      <DestinationsList destinations={destinations} loading={loading} />
    </View>
  );
};
