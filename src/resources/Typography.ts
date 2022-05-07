import {FontType} from '../types';
import Colors from './Colors';

const Typography: FontType = {
  headline: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0.15,
    color: Colors.white,
  },
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0.15,
    color: Colors.white,
  },
  body: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0.44,
    color: Colors.white,
  },
  title: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0.44,
    color: Colors.white,
  },
};

export default Typography;
