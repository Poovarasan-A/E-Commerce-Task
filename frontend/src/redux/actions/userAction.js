import {
  loginFail,
  loginReq,
  loginSuccess,
  registerFail,
  registerReq,
  registerSuccess,
} from "../slices/userSlice";
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
