import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utils/weatherType';
import { BlurView } from 'expo-blur';
import moment from 'moment/moment';
import sizes from '../styles/sizes';
const ForecastCard = (props) => {
  const { dt_txt, temp, min, max, conditon } = props;
  return (
    <View>
      <ImageBackground
        source={weatherType[conditon].bg}
        style={styles.cardWrapper}
        imageStyle={{ opacity: 0.7 }}
      >
        <View style={styles.cardContentWrapper}>
          <Feather
            name={weatherType[conditon].icon}
            size={sizes.large('icon')}
            color={'white'}
            style={styles.mainTempIcon}
          />
          <Text style={styles.mainTemp}> {`${Math.round(temp)}°`} </Text>
        </View>
        <BlurView intensity={40} style={styles.detailContainer}>
          <Text style={styles.detailDay}>{moment(dt_txt).format('dddd')}</Text>
          <Text style={styles.detailOthers}>
            {moment(dt_txt).format('h:mm a')}
          </Text>
          <Text style={styles.detailOthers}>
            {`${Math.round(min)}° / ${Math.round(max)}°`}
          </Text>
        </BlurView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: { margin: 10, borderRadius: 12, overflow: 'hidden' },
  cardContentWrapper: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainTemp: {
    fontSize: sizes.large(),
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
    marginHorizontal: 7
  },
  mainTempIcon: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
    marginHorizontal: 7
  },
  detailContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailDay: {
    fontSize: sizes.medium()
  },
  detailOthers: { fontSize: sizes.regular() }
});

export default ForecastCard;
