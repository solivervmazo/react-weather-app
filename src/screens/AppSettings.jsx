import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Pressable
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SelectBgButton from '../components/SelectBgButton';
const AppSettings = ({ changeImage, imgBg }) => {
  return (
    <LinearGradient
      colors={['purple', 'white']}
      style={styles.background}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <ImageBackground
        source={{ uri: imgBg }}
        style={{ flex: 1 }}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <SafeAreaView
          style={[
            styles.wrapper,
            { justifyContent: 'flex-end', alignItems: 'center' }
          ]}
        >
          <View style={{}}></View>
          <SelectBgButton label={'Select an image'} onPress={changeImage} />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  wrapper: {
    flex: 1,
    paddingBottom: 90,
    paddingTop: StatusBar.currentHeight || 0
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonIcon: {
    paddingRight: 8
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16
  }
});

export default AppSettings;
