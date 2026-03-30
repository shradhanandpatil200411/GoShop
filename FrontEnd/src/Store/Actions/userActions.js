import { toast } from "react-toastify";
import axios from "../../API/axios";
import {
  loginAction,
  logOutAction,
  updateUserAction,
} from "../Reducer/userSlice";

export const asyncCurrentUserAction = (navigate) => async (dispatch) => {
  try {
    const getUser = await axios.get("/auth/user");
    dispatch(loginAction(getUser?.data?.data?.getUserData));
  } catch (err) {
    toast.error(err.response.data.message);
    navigate("/");
  }
};

export const asyncRegisterUserAction = (user, setIsLogin) => async () => {
  try {
    const data = await axios.post("/auth/register", user);
    toast.success(data.data.message);
    setIsLogin(true);
  } catch (err) {
    const { response } = err;
    toast.error(response.data.message);
  }
};

export const asyncLoginUserAction = (user, navigate) => async (dispatch) => {
  try {
    const data = await axios.post("/auth/login", user);
    toast.success(data?.data?.message);
    dispatch(asyncCurrentUserAction());
    navigate("/home");
  } catch (err) {
    const { response } = err;
    toast.error(response.data.message);
  }
};

export const asyncLogOutUserAction = (navigate) => async (dispatch) => {
  const { data } = await axios.post("/auth/logout");
  dispatch(logOutAction());
  toast.success(data);
  navigate("/");
};

export const asyncUpdateUserAction = (inputData) => async (dispatch) => {
  try {
    const data = await axios.patch("/auth/update", inputData);
    toast.success(data.data.message);
    dispatch(updateUserAction(data.data.user));
  } catch (err) {
    console.log(err);
    toast.error(err.message);
  }
};
