import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {FavoritesView} from '../../screens/Favorites/FavoritesView';
import {SearchStack} from './SearchStack';

const Tab = createBottomTabNavigator();

export const DefaultBottom = (): JSX.Element => (
  <Tab.Navigator>
    <Tab.Screen name="Busca" component={SearchStack} />
    <Tab.Screen name="Meus favoritos" component={FavoritesView} />
  </Tab.Navigator>
);
