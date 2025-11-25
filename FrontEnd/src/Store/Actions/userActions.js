import { toast } from "react-toastify";
import axios from "../../API/axios";

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

export const asyncLoginUserAction = (user) => async () => {
  try {
    const data = await axios.post("/auth/login", user);
    toast.success(data.data?.message);
  } catch (err) {
    const { response } = err;
    toast.error(response.data.message);
  }
};
