import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import RowText from '../components/RowText';

import { AppIconSun } from '@app-ui/Icon';
const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <AppIconSun size={100} />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <RowText
          containerStyle={styles.highLowWrapper}
          messageOne={'High: 8'}
          messageTwo={'Low: 6'}
          messageOneStyle={styles.highLow}
          messageTwoStyle={styles.highLow}
        />
      </View>
      <RowText
        containerStyle={styles.bodyWrapper}
        messageOne={"It's Sunny"}
        messageTwo={"It's perfect t-shirt weather"}
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
