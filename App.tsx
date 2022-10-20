import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {DefaultBottom} from './src/routes/DefaultBottom';

const App = () => {
  return (
    <NavigationContainer>
      <DefaultBottom />
    </NavigationContainer>
  );
};

export default App;
