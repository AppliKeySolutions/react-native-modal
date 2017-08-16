import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    backgroundColor: 'black',
  },
  content: {
    position: 'absolute',
    width: '90%',
    bottom: 20,
    justifyContent: 'center',
  },
});
