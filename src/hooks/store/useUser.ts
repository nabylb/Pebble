import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {addUser as setUser} from '../../store';
import {useCallback} from 'react';
import {User} from '../../types';

const useUser = () => {
  const {user} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const addUser = useCallback((_user: User) => dispatch(setUser(_user)), [
    dispatch,
  ]);

  return {
    user,
    addUser,
  };
};

export default useUser;
