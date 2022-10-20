import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {FavoriteStack} from './FavoriteStack';
import {SearchStack} from './SearchStack';

const Tab = createBottomTabNavigator();

export const DefaultBottom = (): JSX.Element => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelPosition: 'beside-icon',
      tabBarLabelStyle: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      tabBarIconStyle: {display: 'none'},
    }}>
    <Tab.Screen name="Busca" component={SearchStack} />
    <Tab.Screen name="Meus favoritos" component={FavoriteStack} />
  </Tab.Navigator>
);
