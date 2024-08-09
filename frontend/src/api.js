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
} from "./redux/slices/userSlice";
import axios from "axios";

//---------------------- Register Action -------------------------------

export const registerNewUser = (formData) => async (dispatch) => {
  try {
    dispatch(registerReq());

    const { data } = await axios.post(
      `http://localhost:8000/ecom/register/user`,
      formData
    );
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerFail(error.response.data.message));
  }
};

//---------------------- Login Action -------------------------------

export const loginUser = (formData) => async (dispatch) => {
  try {
    dispatch(loginReq());
    const { data } = await axios.post(
      `http://localhost:8000/ecom/login/user`,
      formData
    );
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail(error.response.data.message));
  }
};

//---------------------------google User-----------------------

export const googleNewUser = (formData) => async (dispatch) => {
  try {
    dispatch(googleUserReq());

    const { data } = await axios.post(
      `http://localhost:8000/ecom/google`,
      formData
    );
    const token = data.token;
    document.cookie = `token=${token}`;
    dispatch(googleUserSuccess(data));
  } catch (error) {
    let errorMessage = error.message;
    if (error.response && error.response.data) {
      errorMessage = error.response.data.message;
    }
    dispatch(googleUserFail(errorMessage));
  }
};

//----------------------------forgot password----------------------

export const forgotPassword = (formData) => async (dispatch) => {
  try {
    dispatch(forgotPasswordRequest());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `http://localhost:8000/ecom/forgot/password`,
      formData,
      config
    );
    dispatch(forgotPasswordSuccess(data));
  } catch (error) {
    dispatch(forgotPasswordFail(error.response.data.message));
  }
};

export const passwordReset = (formData, token) => async (dispatch) => {
  try {
    dispatch(resetPasswordRequest());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `http://localhost:8000/ecom/password/reset/${token}`,
      formData,
      config
    );
    dispatch(resetPasswordSuccess(data));
  } catch (error) {
    dispatch(resetPasswordFail(error.response.data.message));
  }
};
