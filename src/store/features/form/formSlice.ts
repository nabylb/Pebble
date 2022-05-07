import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Form} from '../../../types';

export interface UserState {
  forms: Form[];
}

const initialState: UserState = {
  forms: [],
};

export const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addForm: (state, action: PayloadAction<Form>) => {
      state.forms = [
        ...state.forms,
        {page: action.payload.page, data: action.payload.data},
      ];
    },
    deleteForm: (state, action: PayloadAction<number>) => {
      state.forms = state.forms.filter(form => form.page !== action.payload);
    },
    resetForms: state => {
      state.forms = [];
    },
  },
  extraReducers: {},
});

// Action creators are generated for each case reducer function
export const {addForm, deleteForm, resetForms} = formSlice.actions;

export default formSlice.reducer;
