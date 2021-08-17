import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlayersList from '../../pages/PlayerList/PlayerList';
import PlayerDetails from '../../pages/PlayerDetails/PlayerDetails';
import {Player} from '../../interfaces/player.interface';

export type StackParamList = {
  Details: {player: Player};
  List: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const Router: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="List" component={PlayersList} />
      <Stack.Screen name="Details" component={PlayerDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
