import React from 'react';
import CurrentWeather from '@app-screens/CurrentWeather';
import UpcomingWeather from '@app-screens/UpcomingWeather';
import City from '@app-screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { Feather } from '@expo/vector-icons';
const NavTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'lightblue'
        },
        headerStyle: {
          backgroundColor: 'lightblue'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'tomato'
        }
      }}
    >
      <Tab.Screen
        name={'Current'}
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name={'droplet'} color={focused ? 'tomato' : 'black'} />
          )
        }}
      />
      <Tab.Screen
        name={'Upcoming'}
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name={'clock'} color={focused ? 'tomato' : 'black'} />
          )
        }}
      />
      <Tab.Screen
        name={'City'}
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name={'home'} color={focused ? 'tomato' : 'black'} />
          )
        }}
      />
    </Tab.Navigator>
  );
};
export default NavTabs;
