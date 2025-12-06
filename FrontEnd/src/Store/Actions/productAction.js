import { toast } from "react-toastify";
import axios from "../../API/axios";
import { addProduct } from "../Reducer/productSlice";

export const asyncCreateProduct = (productData) => async (dispatch) => {
  try {
    const loading = toast.loading("Data is uploading...");

    const result = await axios.post("/product/admin/create", productData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(result);

    dispatch(addProduct([result?.data?.product]));

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

export const asyncGetAllProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/product");
    dispatch(addProduct(data?.data?.getAllProducts));
  } catch (err) {
    toast.error(err.message);
  }
};
