import { useCallback, useRef, useState } from 'react';
import { Animated, Easing, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/app.navigator.tsx';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';

import { Chip } from '../chip';
import { Destination } from '../../../domain/entities';
import { formatCoords } from '../../../shared/utils/coords.utils.ts';
import { STIcon } from '../Icon';
import { Icons } from '../../assets';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

export const DestinationItem = ({ item }: { item: Destination }) => {
  const { navigate } = useNavigation<NavigationProp>();

  const animation = useRef(new Animated.Value(0)).current;

  const [open, setOpen] = useState(false);

  const onToggle = useCallback(() => {
    if (item.isFinalNode) {
      navigate('Details', { id: item.id });
      return;
    }

    setOpen(prev => !prev);

    Animated.timing(animation, {
      toValue: open ? 0 : 1,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [navigate, item, open, animation]);

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const listOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  if (!item) return null;

  return (
    <View>
      <TouchableOpacity onPress={onToggle}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.nameWrapper}>
              <Text
                style={[
                  styles.name,
                  item.parentId !== undefined &&
                  item.isFinalNode &&
                  item.children.length === 0
                    ? styles.childName
                    : {},
                ]}
              >
                {item.name}
              </Text>
              <Text style={styles.coords}>
                {formatCoords(item.coords.lat, item.coords.lng)}
              </Text>
            </View>

            <View>{item.isTop ? <Chip label={'TOP'} /> : null}</View>
            {!item.isFinalNode ? (
              <Animated.View style={{ transform: [{ rotate }] }}>
                <STIcon Icon={Icons.ARROW_DOWN} size={24} />
              </Animated.View>
            ) : null}
          </View>
        </View>
      </TouchableOpacity>

      {!item.isFinalNode && open ? (
        <Animated.View
          style={[
            styles.childsContainer,
            {
              opacity: listOpacity,
            },
          ]}
        >
          <View style={styles.childsWrapper}>
            {item.children.map(child => (
              <DestinationItem key={`kDestination-${child.id}`} item={child} />
            ))}
          </View>
        </Animated.View>
      ) : null}
    </View>
  );
};
