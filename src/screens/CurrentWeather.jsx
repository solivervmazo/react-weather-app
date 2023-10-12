import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native';
import RowText from '../components/RowText';
import { weatherType } from '../utils/weatherType';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import ListItem from '../components/ListItem';
const CurrentWeather = ({ weatherData, cityInfo, weatherForecast }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData;
  const { name, country, population, sunrise, sunset } = cityInfo;
  const weatherCondition = weather[0].main;
  const renderItem = ({ item }) => (
    <ListItem
      conditon={item.weather[0].main}
      dt_txt={item.dt_txt}
      temp={item.main.temp}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  return (
    <LinearGradient
      colors={['purple', 'white']}
      style={styles.background}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <SafeAreaView style={[styles.wrapper]}>
        <View style={styles.container}>
          <View
            style={{
              flexGrow: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text style={{ color: 'white', fontSize: 15, marginBottom: 50 }}>
              {` ${name}, ${country}`}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Feather
                name={weatherType[weatherCondition].icon}
                size={50}
                color={'white'}
              />
              <Text style={{ color: 'white', fontSize: 40 }}>
                {` ${weather[0].description}`}
              </Text>
            </View>
            <Text style={{ color: 'white', fontSize: 20 }}>
              {weatherType[weatherCondition].message}
            </Text>
            <BlurView
              intensity={100}
              style={{
                marginTop: 15,
                borderRadius: 15,
                overflow: 'hidden'
              }}
            >
              <ImageBackground
                imageStyle={{ opacity: 0.3 }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  padding: 25
                }}
              >
                <Text style={styles.temp}>{`${Math.round(temp)}°`}</Text>
                <View>
                  <Text style={styles.highLow}>{`High: ${Math.round(
                    temp_max
                  )}° `}</Text>
                  <Text style={styles.highLow}>{`Low: ${Math.round(
                    temp_min
                  )}°`}</Text>
                  <Text style={styles.highLow}>{`Feels like ${Math.round(
                    feels_like
                  )}°`}</Text>
                </View>
              </ImageBackground>
            </BlurView>
          </View>
          <View style={{ flex: 2 }}>
            <FlatList
              horizontal={true}
              data={weatherForecast}
              renderItem={renderItem}
              keyExtractor={(item) => item.dt_txt}
              style={{}}
              show
            />
          </View>
        </View>
      </SafeAreaView>
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
  temp: {
    color: 'white',
    fontSize: 100,
    fontWeight: 'bold'
  },
  feels: { fontSize: 30, color: 'white' },
  highLowWrapper: { flexDirection: 'row' },
  highLow: {
    color: 'white',
    fontSize: 20
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 20,
    marginBottom: 40
  },
  description: { fontSize: 48 },
  message: { fontSize: 30 }
});

export default CurrentWeather;
