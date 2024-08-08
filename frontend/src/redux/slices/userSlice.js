import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
  },
  reducers: {
    //---------------------------- Create new user --------------------------------------
    registerReq(state) {
      return {
        ...state,
        loading: true,
      };
    },
    registerSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };
    },
    registerFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    //---------------------------- Login user --------------------------------------
    loginReq(state) {
      return {
        ...state,
        loading: true,
      };
    },
    loginSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };
    },
    loginFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

const { actions, reducer } = userSlice;

export const {
  registerReq,
  registerSuccess,
  registerFail,
  loginReq,
  loginSuccess,
  loginFail,
} = actions;

export default reducer;
