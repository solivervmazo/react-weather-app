import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utils/weatherType';
import { BlurView } from 'expo-blur';
import moment from 'moment/moment';
const ListItem = (props) => {
  const { dt_txt, temp, min, max, conditon } = props;
  return (
    <View>
      <ImageBackground
        source={weatherType[conditon].bg}
        style={[{ margin: 10, borderRadius: 12, overflow: 'hidden' }]}
        imageStyle={{ opacity: 0.7 }}
      >
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Feather
            name={weatherType[conditon].icon}
            size={30}
            color={'white'}
            style={{
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 20,
              marginHorizontal: 7
            }}
          />
          <Text
            style={{
              fontSize: 38,
              color: 'white',
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 20,
              marginHorizontal: 7
            }}
          >{`${Math.round(temp)}°`}</Text>
        </View>
        <BlurView
          intensity={40}
          style={{
            width: '100%',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text
            style={[
              styles.date,
              {
                fontSize: 20
              }
            ]}
          >
            {moment(dt_txt).format('dddd')}
          </Text>
          <Text style={styles.date}>{moment(dt_txt).format('h:mm a')}</Text>
          <Text style={styles.temp}>
            {`${Math.round(min)}° / ${Math.round(max)}°`}{' '}
          </Text>
        </BlurView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  image: {
    // paddingHorizontal: 15,
    // paddingVertical: 20,
    // flexShrink: 0,
    marginVertical: 8,
    marginHorizontal: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 12,
    overflow: 'hidden'
  },
  dateTextWrapper: {
    flexDirection: 'column'
  }
});

export default ListItem;
