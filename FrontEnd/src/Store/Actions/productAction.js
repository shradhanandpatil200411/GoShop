import { toast } from "react-toastify";
import axios from "../../API/axios";

export const asyncCreateProduct = (productData) => async () => {
  try {
    const result = await axios.post("/product/admin/create", productData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success(result.data.message);
  } catch (err) {
    toast.error(err.message);
  }
};
