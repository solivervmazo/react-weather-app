import React from 'react';
import { weatherType } from '../utils/weatherType';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import sizes from '../styles/sizes';
const ForecastNowCard = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData;
  const weatherCondition = weather[0].main;
  return (
    <View style={styles.contentContainer}>
      <View style={styles.weatherDescriptionContainer}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={sizes.large('icon')}
          color={'white'}
        />
        <Text style={styles.weatherDescriptionText}>
          {` ${weather[0].description}`}
        </Text>
      </View>
      <Text style={styles.weatherMessageText}>
        {weatherType[weatherCondition].message}
      </Text>
      <BlurView intensity={100} style={styles.currentWeatherContainer}>
        <ImageBackground
          imageStyle={{ opacity: 0.3 }}
          style={styles.currentWeatherContent}
        >
          <Text style={styles.mainTempText}>{`${Math.round(temp)}°`}</Text>
          <View>
            <Text style={styles.subDetailText}>
              {`High: ${Math.round(temp_max)}° `}
            </Text>
            <Text style={styles.subDetailText}>
              {`Low: ${Math.round(temp_min)}°`}
            </Text>
            <Text style={styles.subDetailText}>
              {`Feels like ${Math.round(feels_like)}°`}
            </Text>
          </View>
        </ImageBackground>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  weatherDescriptionContainer: { flexDirection: 'row' },
  weatherDescriptionText: { color: 'white', fontSize: sizes.large() },
  weatherMessageText: { color: 'white', fontSize: sizes.medium() },
  currentWeatherContainer: {
    marginTop: 15,
    borderRadius: 15,
    overflow: 'hidden'
  },
  currentWeatherContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 25
  },
  mainTempText: {
    color: 'white',
    fontSize: sizes.dxLarge(),
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
  },
  subDetailText: {
    color: 'white',
    fontSize: sizes.medium()
  }
});

export default ForecastNowCard;
