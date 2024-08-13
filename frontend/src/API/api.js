import {
  forgotPasswordFail,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  googleUserFail,
  googleUserReq,
  googleUserSuccess,
  loginFail,
  loginReq,
  loginSuccess,
  registerFail,
  registerReq,
  registerSuccess,
  resetPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
} from "../redux/slices/userSlice";
import axios from "axios";

const BASE_URL = "http://localhost:8000/api/ecom/";

const privateApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//01
//User Register

export const registerNewUser = (formData) => async (dispatch) => {
  try {
    dispatch(registerReq());
    const { data } = await privateApi.post(`/register/user`, formData, {
      withCredentials: true,
    });
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerFail(error.response.data.message));
  }
};

//02
//User Login

export const loginUser = (formData) => async (dispatch) => {
  try {
    dispatch(loginReq());
    const { data } = await privateApi.post(`/login/user`, formData);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail(error.response.data.message));
  }
};

//03
//Google User
export const googleNewUser = (formData) => async (dispatch) => {
  try {
    dispatch(googleUserReq());
    const { data } = await privateApi.post(`/google`, formData);
    const token = data.token;
    document.cookie = `token=${token}`;
    dispatch(googleUserSuccess(data));
  } catch (error) {
    dispatch(googleUserFail(error.response.data.message));
  }
};

//04
//Forgot password
export const forgotPassword = (formData) => async (dispatch) => {
  try {
    dispatch(forgotPasswordRequest());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await privateApi.post(
      `/forgot/password`,
      formData,
      config
    );
    dispatch(forgotPasswordSuccess(data));
  } catch (error) {
    dispatch(forgotPasswordFail(error.response.data.message));
  }
};

//05
//Password Reset
export const passwordReset = (formData, token) => async (dispatch) => {
  try {
    dispatch(resetPasswordRequest());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await privateApi.post(
      `/password/reset/${token}`,
      formData,
      config
    );
    dispatch(resetPasswordSuccess(data));
  } catch (error) {
    dispatch(resetPasswordFail(error.response.data.message));
  }
};
