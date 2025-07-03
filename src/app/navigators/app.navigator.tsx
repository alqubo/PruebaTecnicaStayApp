import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/home';
import { DetailsScreen } from '../screens/details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Details: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{ title: 'Destinos' }}
        />
        <Stack.Screen
          name={'Details'}
          component={DetailsScreen}
          options={{ title: 'Detalles' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
