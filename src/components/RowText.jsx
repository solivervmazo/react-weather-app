import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const RowText = (props) => {
  const {
    messageOne,
    messageTwo,
    containerStyle,
    messageOneStyle,
    messageTwoStyle
  } = props;
  return (
    <View style={[containerStyle]}>
      <Text style={[messageOneStyle]}>{messageOne} </Text>
      <Text style={[messageTwoStyle]}>{messageTwo} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  messageOne: {
    color: 'black',
    fontSize: 20
  },
  messageTwo: {
    color: 'black',
    fontSize: 20
  }
});

export default RowText;
