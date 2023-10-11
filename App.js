import React from 'react';
import { StyleSheet, View } from 'react-native';
import CurrentWeather from '@/components/pages/CurrentWeather';

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
