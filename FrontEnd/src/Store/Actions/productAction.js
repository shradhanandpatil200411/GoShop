import { toast } from "react-toastify";
import axios from "../../API/axios";

export const asyncCreateProduct = (productData) => async () => {
  try {
    const loading = toast.loading("Data is uploading...");

    const result = await axios.post("/product/admin/create", productData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(result);

    toast.update(loading, {
      render: "Product created successfully",
      type: "success",
      isLoading: false,
      autoClose: 2000,
    });
  } catch (err) {
    toast.error(err.message);
  }
};
