import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground
} from 'react-native';

import ListItem from '../components/ListItem';

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      conditon={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/ucw.jpg')}
        style={styles.image}
      >
        <Text>Upcommin Weather</Text>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue'
  },

  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  image: {
    flex: 1
  }
});

export default UpcomingWeather;
