import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground,
  View
} from 'react-native';

import IconText from '../components/IconText';
import moment from 'moment/moment';

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/city.jpg')}
        style={styles.imgLayout}
      >
        <Text style={[styles.cityText, styles.cityName]}>{name}</Text>
        <Text style={[styles.cityText, styles.countryName]}>{country}</Text>
        <View style={[styles.populationWrapper, styles.rowLayout]}>
          <IconText
            iconName={'user'}
            iconSize={50}
            iconColor={'red'}
            bodyText={`Population: ${population}`}
            bodyTextStyle={styles.populationText}
          />
        </View>
        <View style={[styles.riseSetWrapper, styles.rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconSize={50}
            iconColor={'white'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyle={styles.riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconSize={50}
            iconColor={'white'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyle={styles.riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    justifyContent: 'center'
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default City;
