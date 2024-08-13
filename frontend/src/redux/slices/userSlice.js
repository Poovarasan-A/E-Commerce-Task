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
    clearLoginErr(state) {
      return {
        ...state,
        error: null,
      };
    },
    forgotPasswordRequest(state) {
      return {
        ...state,
        loading: true,
        message: null,
      };
    },
    forgotPasswordSuccess(state, action) {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    },
    forgotPasswordFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    resetPasswordRequest(state) {
      return {
        ...state,
        loading: true,
      };
    },
    resetPasswordSuccess(state, action) {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    },
    resetPasswordFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    //Google User
    googleUserReq(state) {
      return {
        ...state,
        loading: true,
      };
    },
    googleUserSuccess(state, action) {
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };
    },
    googleUserFail(state, action) {
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
  clearLoginErr,
  forgotPasswordFail,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  resetPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  googleUserFail,
  googleUserReq,
  googleUserSuccess,
} = actions;

export default reducer;
