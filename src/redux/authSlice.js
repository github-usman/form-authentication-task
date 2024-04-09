import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  user: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action) {
      const userData = action.payload;
      const data = JSON.parse(JSON.stringify(state.user));
      // check authorize user or not
      if (
        userData?.email === data?.email &&
        userData?.password === data?.password
      ) {
        console.log(
          data?.email,
          'email-------->',
          data?.password,
          '==========',
          userData?.email,
          ' email',
          userData?.password,
          'password'
        );
        toast.success(`Welcome! ${data.fullName}`);
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
        toast.error(`Enter Valid details or Register`);
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
