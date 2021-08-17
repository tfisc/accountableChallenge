import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    padding: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 256,
    height: 64,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  text: {
    color: 'white',
  },
});
