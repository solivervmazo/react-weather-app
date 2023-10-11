import React from 'react';
import { StyleSheet, View } from 'react-native';
import CurrentWeather from '@app-screens/CurrentWeather';
import UpcomingWeather from '@app-screens/UpcomingWeather';
import City from '@app-screens/City';
const App = () => {
  return (
    <View style={styles.container}>
      <City />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
