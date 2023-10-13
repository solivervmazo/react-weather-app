import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import sizes from '../styles/sizes';
const SelectBgButton = ({ label, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <BlurView intensity={80} style={styles.button}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden'
  },
  buttonIcon: {
    paddingRight: 8
  },
  buttonLabel: {
    color: '#fff',
    fontSize: sizes.medium(),
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
  }
});

export default SelectBgButton;
