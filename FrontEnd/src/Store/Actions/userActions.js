import { toast } from "react-toastify";
import axios from "../../API/axios";
import { loginAction } from "../Reducer/userSlice";

export const asyncCurrentUserAction = () => async (dispatch) => {
  try {
    const getUser = await axios.get("/auth/user");
    dispatch(loginAction(getUser?.data?.data?.getUserData));
  } catch (err) {
    console.log(err);
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

export const asyncLoginUserAction = (user) => async (dispatch) => {
  try {
    const data = await axios.post("/auth/login", user);
    toast.success(data.data?.message);
    dispatch(asyncCurrentUserAction());
  } catch (err) {
    const { response } = err;
    toast.error(response.data.message);
  }
};
