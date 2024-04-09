import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action) {
      const { email, password } = action.payload;
      if (email === state?.user?.email && password === state?.user?.password) {
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
        console.log('not valid');
      }
    },
    signUp(state, action) {
      state.user = action.payload;
    },
    updateAccount(state, action) {
      state.user = action.payload;
    },
    signOut(state) {
      state.user = null;
      state.isAuthenticated = false;
    }
  }
});

export const { signIn, signUp, updateAccount, signOut } = authSlice.actions;

export default authSlice.reducer;
