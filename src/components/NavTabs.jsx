import React from 'react';
import CurrentWeather from '@app-screens/CurrentWeather';
import UpcomingWeather from '@app-screens/UpcomingWeather';
import City from '@app-screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ iconName, focused }) => {
  return (
    <Feather name={iconName} size={30} color={focused ? 'white' : 'grey'} />
  );
};

const NavTabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          position: 'absolute',
          height: 70,
          elevation: 0
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={['black', 'transparent']}
            style={[StyleSheet.absoluteFill]}
            start={{ x: 1, y: 1 }}
            end={{ x: 1, y: 0 }}
            locations={[0.2, 1]}
          />
        ),
        headerStyle: {
          backgroundColor: 'lightblue'
        },
        headerShown: false
      }}
    >
      <Tab.Screen
        name={'Current'}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon iconName={'home'} focused={focused} />
          )
        }}
      >
        {() => (
          <CurrentWeather
            weatherData={weather.list[0]}
            cityInfo={weather.city}
            weatherForecast={weather.list}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name={'Forecast'}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon iconName={'clock'} focused={focused} />
          )
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'Settings'}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon iconName={'settings'} focused={focused} />
          )
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
export default NavTabs;
