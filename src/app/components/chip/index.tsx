import { Text, View } from 'react-native';
import styles from './styles.ts';

export const Chip = ({ label }: { label: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};
