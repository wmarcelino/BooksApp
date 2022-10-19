import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {SearchViewModel} from '../../screens/Search/SearchViewModel';
import {BookDetailedViewModel} from '../../screens/BookDetailed/BookDetailedViewModel';

const Stack = createStackNavigator();

export const SearchStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Buscar"
        component={SearchViewModel}
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
