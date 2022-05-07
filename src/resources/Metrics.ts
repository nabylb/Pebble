import {Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Metrics = {
  screenWidth: SCREEN_WIDTH,
  screenHeight: SCREEN_HEIGHT,

  // Card margin
  margin: 10,

  // Shadow style
  shadowOffsetWidth: 0,
  shadowOffsetHeight: 2,
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  // Border radius
  borderRadius: 8,
  borderRadius10: 10,

  // Margin
  margin20: 20,
  margin50: 50,
  margin100: 100,
  margin150: 150,

  // padding
  padding8: 8,
  padding10: 10,
  padding12: 12,
  padding14: 14,
  padding16: 16,
  padding32: 32,

  // space
  space10: 10,
  space5: 5,

  // Inputs
  inputHeight: 60,
  inputWidth: SCREEN_WIDTH - 80,
};

export default Metrics;
