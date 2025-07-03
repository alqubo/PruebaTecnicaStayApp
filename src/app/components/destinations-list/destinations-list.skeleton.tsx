import { useEffect, useMemo } from 'react';
import { Animated, View } from 'react-native';
import styles from './styles';

const DELAY = 100;
const ROWS = 8;

export const DestinationsListSkeleton = () => {
  const opacities = useMemo(
    () => Array.from({ length: ROWS }, () => new Animated.Value(0.5)),
    [],
  );

  useEffect(() => {
    opacities.forEach((opacity, index) => {
      setTimeout(() => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(opacity, {
              toValue: 0.9,
              duration: 1000,
              useNativeDriver: true,
            }),
            Animated.timing(opacity, {
              toValue: 0.5,
              duration: 1000,
              useNativeDriver: true,
            }),
          ]),
        ).start();
      }, index * DELAY);
    });
  }, [opacities]);

  return (
    <View style={styles.skeleton}>
      {opacities.map((opacity, idx) => (
        <Animated.View
          key={idx}
          style={[
            styles.skeletonItem,
            {
              opacity,
            },
          ]}
        />
      ))}
    </View>
  );
};
