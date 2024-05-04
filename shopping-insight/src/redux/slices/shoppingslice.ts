import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dayjs } from 'dayjs';
import { RangeValue } from 'rc-picker/lib/interface';
import { Ages, ResponseData, ShoppingState } from '../../utils/@types';

const initialState: ShoppingState = {
  value: {
    datePicker: null,
    category: '',
    input: '',
    age: [],
    timeunit: 'date',
    gender: '',
    device: '',
  },
  responseData: null,
};

const shoppingSlice = createSlice({
  name: 'shoppingSlice',
  initialState,
  reducers: {
    setRangePickerValue: (
      state,
      action: PayloadAction<RangeValue<Dayjs> | null>,
    ) => {
      state.value = {
        ...state.value,
        datePicker: action.payload,
      };
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.value = {
        ...state.value,
        category: action.payload,
      };
    },
    setInput: (state, action: PayloadAction<string>) => {
      state.value = {
        ...state.value,
        input: action.payload,
      };
    },
    setAge: (state, action: PayloadAction<Ages[]>) => {
      state.value = {
        ...state.value,
        age: action.payload,
      };
    },
    setTimeUnit: (state, action: PayloadAction<string | undefined>) => {
      state.value = {
        ...state.value,
        timeunit: action.payload,
      };
    },
    setGender: (state, action: PayloadAction<string | undefined>) => {
      state.value = {
        ...state.value,
        gender: action.payload,
      };
    },
    setDevice: (state, action: PayloadAction<string | undefined>) => {
      state.value = {
        ...state.value,
        device: action.payload,
      };
    },
    setResponseData: (state, action: PayloadAction<ResponseData>) => {
      state.responseData = action.payload;
    },
  },
});

export const {
  setRangePickerValue,
  setCategory,
  setInput,
  setAge,
  setTimeUnit,
  setGender,
  setDevice,
  setResponseData,
} = shoppingSlice.actions;

export default shoppingSlice.reducer;
