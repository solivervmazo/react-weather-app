import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import RowText from '../components/RowText';
import { weatherType } from '../utils/weatherType';
import { Feather } from '@expo/vector-icons';

const CurrentWeather = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData;
  const weatherCondition = weather[0].main;
  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}
    >
      <View style={styles.container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color={'white'}
        />
        <Text style={styles.temp}>{temp}</Text>
        <Text style={styles.feels}>{`Feels like ${feels_like}`}</Text>
        <RowText
          containerStyle={styles.highLowWrapper}
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          messageOneStyle={styles.highLow}
          messageTwoStyle={styles.highLow}
        />
      </View>
      <RowText
        containerStyle={styles.bodyWrapper}
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        messageOneStyle={styles.description}
        messageTwoStyle={styles.message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: 'pink' },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: { fontSize: 30, color: 'black' },
  highLowWrapper: { flexDirection: 'row' },
  highLow: {
    color: 'black',
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
