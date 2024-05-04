import { combineReducers } from '@reduxjs/toolkit';
import shoppingslice from '../slices/shoppingslice';

const rootReducer = combineReducers({
  shopping: shoppingslice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
