import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  UIManager,
  Appearance,
  StyleSheet,
} from 'react-native';
import {noop} from '../../utils';
import {Typography, Colors, Metrics} from '../../resources';

const isDarkMode = Appearance.getColorScheme() === 'dark';

interface TextEntryProps {
  title: string;
  value?: string | null;
  width?: string | number;
  placeholder?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | undefined;
  enablesReturnKeyAutomatically?: boolean;
  accessoryDisabled?: boolean;
  accessoryIcon?: boolean;
  isError?: boolean;
  secureTextEntry?: boolean;
  returnKeyType?:
    | 'none'
    | 'default'
    | 'next'
    | 'search'
    | 'done'
    | 'go'
    | 'send'
    | 'previous'
    | 'google'
    | 'join'
    | 'route'
    | 'yahoo'
    | 'emergency-call'
    | undefined;
  testID?: string;
  onSubmitEditing?: (value: any) => void;
  onChangeText?: (value: any) => void;
  onBlur?: (value: any) => void;
  onFocus?: () => void;
  reference?: (value: any) => void;
}

const TextEntry = ({
  title = '',
  value = '',
  width = Metrics.inputWidth,
  placeholder = '',
  autoCapitalize = 'none',
  keyboardType = 'default',
  enablesReturnKeyAutomatically = true,
  isError = false,
  secureTextEntry = false,
  returnKeyType = 'next',
  testID = '',
  onSubmitEditing = noop,
  onChangeText = noop,
  onFocus = noop,
  onBlur = noop,
  reference = noop,
}: TextEntryProps) => {
  const [focus, setFocus] = useState(false);
  const [secureText, setSecureText] = useState(secureTextEntry);
  const [error, setError] = useState(isError);

  useEffect(() => {
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  useEffect(() => {
    setError(isError);
  }, [isError]);

  return (
    <View
      style={[
        styles.container,
        {
          width,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Text
          style={styles.title}
          numberOfLines={2}
          adjustsFontSizeToFit={true}
        >
          {title}
        </Text>
      </View>
      <View
        style={[
          styles.textInputContainer,
          {
            borderColor: error ? Colors.danger_60 : Colors.grey11,
            backgroundColor: focus
              ? Colors.backgroundInside
              : Colors.backgroundInside,
          },
        ]}
      >
        <TextInput
          ref={reference}
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={isDarkMode ? Colors.grey11 : Colors.grey11}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          secureTextEntry={secureText}
          autoCorrect={false}
          value={value || ''}
          enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
          returnKeyType={returnKeyType}
          testID={testID}
          onChangeText={onChangeText}
          // onBlur={() => {
          //   setFocus(false);
          // }}
          onBlur={onBlur}
          onFocus={() => {
            setFocus(true);
            setError(false);
            onFocus();
          }}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 2 * Metrics.inputHeight,
    width: Metrics.inputWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Metrics.inputWidth,
    height: Metrics.inputHeight,
    borderRadius: Metrics.borderRadius,
    borderWidth: 1,
    borderColor: Colors.white,
    marginTop: Metrics.space10,
  },
  textInput: {
    ...Typography.body1Style,
    flex: 1,
    textAlign: 'center',
    color: Colors.text,
  },
  errorContainer: {
    width: Metrics.inputWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: Metrics.borderRadius,
    backgroundColor: Colors.danger_10,
  },
  errorPlaceholder: {
    width: Metrics.inputWidth,
  },
  errorText: {
    ...Typography.body2White,
    color: Colors.danger_80,
    textAlign: 'center',
    marginTop: Metrics.space5,
    marginBottom: Metrics.space5,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  title: {
    flex: 4,
    textAlign: 'left',
    ...Typography.titleBold,
    color: Colors.white,
  },
});

export default TextEntry;
