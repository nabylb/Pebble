import {useCallback} from 'react';
import Auth0 from 'react-native-auth0';
const auth0 = new Auth0({
  domain: 'nabyl.auth0.com',
  clientId: 'KIOS1YGCv2j1atAF1zkeINkESMkaIKLO',
});

const useAuth = () => {
  const login = useCallback(() => {
    return auth0.webAuth.authorize({
      scope: 'openid profile email',
      prompt: 'login',
    });
  }, []);

  const logout = () => {
    return auth0.webAuth.clearSession();
  };

  return {
    login,
    logout,
  };
};

export default useAuth;
