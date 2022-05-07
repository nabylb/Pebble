import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import {Colors, Metrics, Typography} from '../../resources';

const BUTTON_DEFAULT_WIDTH = '100%';
const BUTTON_MAX_LINES = 1;

interface IButtonProps {
  title: string;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  height?: number;
  width?: string | number;
  testID?: string;
  isFramed?: boolean;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const Button = ({
  title,
  color = Colors.white,
  backgroundColor = Colors.button,
  disabled = false,
  isFramed = false,
  height = Metrics.margin50,
  width = BUTTON_DEFAULT_WIDTH,
  testID = '',
  onPress,
}: IButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          height,
          width,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
      testID={testID}
    >
      <View
        style={[
          styles.button,
          {
            height,
            width,
            backgroundColor: !isFramed ? backgroundColor : Colors.transparent,
            borderColor: isFramed ? color : Colors.transparent,
            borderWidth: isFramed ? 1 : 0,
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              color,
            },
          ]}
          numberOfLines={BUTTON_MAX_LINES}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    borderRadius: Metrics.borderRadius10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.borderRadius10,
    paddingLeft: Metrics.padding32,
    paddingRight: Metrics.padding32,
  },
  text: {
    ...Typography.body,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Button;
