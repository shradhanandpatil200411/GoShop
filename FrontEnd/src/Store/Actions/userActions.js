import axios from "../../API/axios";

export const asyncRegisterUserAction = (user) => async () => {
  await axios.post("/auth/register", user);
};
