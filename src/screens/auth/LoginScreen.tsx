import {Images, Typography, Colors, Metrics} from '../../resources';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useAuth, useUser} from '../../hooks';

import {Button} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';
import {debugLog} from '../../utils';
import StartScreen from './StartScreen';

const LoginScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showLoginButton, setShowLoginButton] = useState<boolean>(true);

  // @ts-ignore
  const {addUser} = useUser();
  const {login} = useAuth();

  const showLogin = () => {
    login()
      .then(credentials => {
        setLoading(true);
        addUser({token: credentials.accessToken});
      })
      .catch(error => {
        debugLog('Error: ', error);

        setLoading(false);
        setShowLoginButton(true);
      });
    setShowLoginButton(true);
  };

  const loginPress = () => {
    showLogin();
  };

  const renderLoginButton = () => {
    return showLoginButton ? (
      <Button
        onPress={() => loginPress()}
        width={Metrics.screenWidth - 2 * Metrics.padding32}
        title="Login"
        isFramed
        color={Colors.primary}
      />
    ) : (
      <View style={styles.emptyView} />
    );
  };

  return (
    <View style={styles.containerStyle}>
      <View style={styles.logoContainer}>
        <Image source={Images.logo} />
      </View>
      {renderLoginButton()}
      <Modal animationType="fade" transparent={true} visible={loading}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingLeft: Metrics.padding32,
    paddingRight: Metrics.padding32,
    paddingBottom: (2 * Metrics.screenHeight) / 3,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  sectionStyle: {
    flexDirection: 'row',
  },
  emptyView: {
    height: Metrics.margin50,
  },
  sectionMarginHalfStyle: {
    flexDirection: 'row',
    marginTop: Metrics.padding8,
  },
  sectionMarginStyle: {
    flexDirection: 'row',
    marginTop: Metrics.padding16,
    height: 40,
  },
  imageStyle: {
    alignSelf: 'center',
    marginTop: 120,
    marginBottom: 60,
  },
  orStyle: {
    ...Typography.body,
    marginTop: 24,
    marginBottom: 24,
  },
});

export default LoginScreen;
