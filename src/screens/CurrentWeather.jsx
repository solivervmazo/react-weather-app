import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ForecastCardList from '../components/ForecastCardList';
import ForecastNowCard from '../components/ForecastNowCard';
import sizes from '../styles/sizes';
import { weatherType } from '../utils/weatherType';
const CurrentWeather = ({ weatherData, cityInfo, weatherForecast, imgBg }) => {
  const { name: cityName, country: cityCountry } = cityInfo;
  const weatherConditon = weatherData?.weather?.[0]?.main || 'Clear';
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
        <ImageBackground
          source={weatherType[weatherConditon].bg}
          style={{ flex: 1 }}
          imageStyle={{ resizeMode: 'cover', opacity: 0.3 }}
        >
          <SafeAreaView style={[styles.wrapper]}>
            <View style={styles.container}>
              <View style={styles.locationContainer}>
                <Text style={styles.locationText}>
                  {` ${cityName}, ${cityCountry}`}
                </Text>
              </View>
              <ForecastNowCard weatherData={weatherData} />

              <View style={{ flex: 2 }}>
                <ForecastCardList data={weatherForecast} horizontal={true} />
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
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
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  locationContainer: {
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  locationText: {
    color: 'white',
    fontSize: sizes.medium(),
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
  }
});

export default CurrentWeather;
