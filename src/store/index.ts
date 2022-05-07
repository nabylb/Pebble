import {configureStore} from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import formReducer from './features/form/formSlice';

const createDebugger = require('redux-flipper').default;

export const store = configureStore({
  reducer: {
    user: userReducer,
    forms: formReducer,
  },
  middleware: getDefaultMiddleware =>
    __DEV__
      ? getDefaultMiddleware().concat(createDebugger())
      : getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {default as userSlice} from './features/user/userSlice';
export {addUser, deleteUser} from './features/user/userSlice';
export {default as formSlice} from './features/form/formSlice';
export {addForm, deleteForm, resetForms} from './features/form/formSlice';
