import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavTabs from './src/components/NavTabs';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <NavTabs />
    </NavigationContainer>
  );
};

export default App;
