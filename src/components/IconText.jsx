import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const IconText = (props) => {
  const { iconName, bodyText, iconSize, iconColor, bodyTextStyle } = props;
  return (
    <View style={styles.container}>
      <Feather name={iconName} size={iconSize} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyle]}>{bodyText} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textTheme: {
    fontWeight: 'bold'
  }
});

export default IconText;
