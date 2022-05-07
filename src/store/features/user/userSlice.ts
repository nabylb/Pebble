import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../../types';

export interface UserState {
  user: User;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    deleteUser: state => {
      state.user = null;
    },
  },
  extraReducers: {},
});

// Action creators are generated for each case reducer function
export const {addUser, deleteUser} = userSlice.actions;

export default userSlice.reducer;
