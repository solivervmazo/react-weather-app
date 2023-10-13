import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground
} from 'react-native';

import ForecastCard from '../components/ForecastCard';
import { LinearGradient } from 'expo-linear-gradient';

const UpcomingWeather = ({ weatherData, imgBg }) => {
  const renderItem = ({ item }) => (
    <ForecastCard
      conditon={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      temp={item.main.temp}
    />
  );
  return (
    <LinearGradient
      colors={['purple', 'white']}
      style={styles.background}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <ImageBackground
        source={{ uri: imgBg }}
        style={{ flex: 1 }}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <SafeAreaView style={styles.wrapper}>
          <FlatList
            data={weatherData}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}
            initialNumToRender={5}
          />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  wrapper: {
    flex: 1,
    paddingBottom: 70,
    paddingTop: StatusBar.currentHeight || 0
  }
});

export default UpcomingWeather;
