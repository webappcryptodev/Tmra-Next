import { User } from '@fusionauth/typescript-client';
import { createSlice } from '@reduxjs/toolkit';

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: {} as unknown as User,
  reducers: {
    readCurrentUserFromLocalStorage(state, action) {
      console.debug('currentUserSlice.readFromLocalStorage');
      return JSON.parse(localStorage.getItem('currentUser') ?? '{}');
    },
    signedIn(state, action) {
      console.debug('currentUserSlice.signedIn', action.payload);
      return action.payload;
    },
    signedOut(state, action) {
      console.debug('currentUserSlice.signedOut');
      return JSON.parse(localStorage.getItem('currentUser') ?? '{}');
    },
  },
});

export const { readCurrentUserFromLocalStorage, signedIn, signedOut } = currentUserSlice.actions;

export default currentUserSlice.reducer;
