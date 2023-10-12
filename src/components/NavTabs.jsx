import React from 'react';
import CurrentWeather from '@app-screens/CurrentWeather';
import UpcomingWeather from '@app-screens/UpcomingWeather';
import City from '@app-screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { Feather } from '@expo/vector-icons';
const NavTabs = ({ weather }) => {
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
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name={'droplet'} color={focused ? 'tomato' : 'black'} />
          )
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={'Upcoming'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name={'clock'} color={focused ? 'tomato' : 'black'} />
          )
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name={'home'} color={focused ? 'tomato' : 'black'} />
          )
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
export default NavTabs;
