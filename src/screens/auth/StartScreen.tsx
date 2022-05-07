import {Colors} from '../../resources';

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {createRootNavigator} from '../../navigation';
import {useUser} from '../../hooks';

const StartScreen = () => {
  const {user} = useUser();

  useEffect(() => {
    [console.log(user?.token)];
  }, [user?.token]);

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.white}
        showHideTransition={'fade'}
        hidden={false}
        barStyle="dark-content"
        translucent={false}
      />

      {/* {createRootNavigator(user?.sessionToken)} */}
      {createRootNavigator(user?.token)}
    </>
  );
};

export default StartScreen;
