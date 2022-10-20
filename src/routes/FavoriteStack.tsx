import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {BookDetailedViewModel} from '../screens/BookDetailed/BookDetailedViewModel';
import {FavoritesViewModel} from '../screens/Favorites/FavoritesViewModel';

const Stack = createStackNavigator();

export const FavoriteStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favoritos"
        component={FavoritesViewModel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detalhe"
        component={BookDetailedViewModel}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
