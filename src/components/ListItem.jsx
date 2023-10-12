import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utils/weatherType';
import moment from 'moment/moment';
const ListItem = (props) => {
  const { dt_txt, min, max, conditon } = props;
  return (
    <View style={styles.item}>
      <Feather name={weatherType[conditon].icon} size={50} color={'white'} />
      <View style={styles.dateTextWrapper}>
        <Text style={styles.date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={styles.date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={styles.temp}>{`${Math.round(min)}° / ${Math.round(
        max
      )}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  dateTextWrapper: {
    flexDirection: 'column'
  }
});

export default ListItem;
