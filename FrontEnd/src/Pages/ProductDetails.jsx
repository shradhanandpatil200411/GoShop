import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "../API/axios";
import { toast } from "react-toastify";
import { FaFacebook, FaHeart } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Store/Reducer/productSlice";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [sizeSelect, setSizeSelect] = useState({
    size: null,
    isSelect: true,
  });
  const [addToCartBtn, setAddToCartBtn] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await axios.get(`/product/product-details/${id}`);
        setProduct(response.data.data || response.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    if (id) {
      getProductDetails();
    }
  }, [id]);

  if (!product) return <div className='pt-20 text-center'>Loading...</div>;

  const { title, description, price, salePrice, sizes, subCategory } =
    product.productDetails;

  const handelAddCart = () => {
    if (sizeSelect.size === null) {
      setSizeSelect((prev) => ({ ...prev, isSelect: false }));
    } else {
      setAddToCartBtn(true);
      let productDetails = {
        product,
        quantity,
        size: { selectSize: sizeSelect.size, allSize: sizes },
      };
      dispatch(addToCart(productDetails));
      toast("Product is added Successfully");
    }
  };

  const handelRemoveCart = (id) => {
    toast.error("Product Remove from cart");
    dispatch(removeFromCart(id));
    setAddToCartBtn(false);
    setSizeSelect({ isSelect: true, size: null });
  };

  return (
    <>
      <div className='pt-20  flex text-white'>
        <div className=' w-1/2 overflow-hidden '>
          <img src={product.imageInfo.imgUrl} alt='img' />
        </div>
        <div className='flex flex-col gap-6  w-1/2  p-4'>
          <div>
            <h1 className='text-2xl'>{title}</h1>
            <p className='font-semibold text-gray-400 hover:text-white'>
              {subCategory}
            </p>
          </div>
          <hr className='text-gray-400' />
          <h1 className=' text-xl font-bold '>
            <span className='line-through text-gray-300'>₹ {price}</span>{" "}
            <span>₹ {salePrice}</span>
          </h1>
          <div>
            <div className='flex gap-10 mt-5'>
              {sizes.map((sizeObj, index) => {
                const sizeName = Object.keys(sizeObj)[0];
                const isAvailable = sizeObj[sizeName];
                return (
                  <div
                    key={index}
                    className={`text-lg border-2 text-center font-semibold p-2 w-14 ${
                      sizeName == sizeSelect.size ?
                        "border-Bright-Orange text-Bright-Orange "
                      : "border-gray-500 "
                    }`}
                    onClick={() => {
                      if (isAvailable) {
                        setSizeSelect({ isSelect: true, size: sizeName });
                      }
                    }}
                    style={
                      isAvailable ?
                        { font: "bold", cursor: "pointer" }
                      : {
                          color: "grey",
                          cursor: "not-allowed",
                          textDecoration: "line-through",
                        }
                    }>
                    <h1 className=' '>{sizeName.toUpperCase()}</h1>
                  </div>
                );
              })}
            </div>
            {!sizeSelect.isSelect ?
              <small className='text-red-500'>Please select the size</small>
            : ""}
          </div>
          <div className='flex flex-col gap-5'>
            <div>
              <label className='mx-2' htmlFor='quantity'>
                Quantity
              </label>
              <select
                id='quantity'
                onChange={(e) => setQuantity(e.target.value)}
                className='text-black  bg-white outline-none'>
                {Array(10)
                  .fill("")
                  .map((_, i) => {
                    return (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className='flex gap-10 justify-between w-10/12'>
              {addToCartBtn ?
                <button
                  onClick={() => handelRemoveCart(id)}
                  className='w-1/2 rounded-lg bg-red-500 px-4 py-2 font-semibold cursor-pointer'>
                  REMOVE FROM CART
                </button>
              : <button
                  onClick={handelAddCart}
                  className='w-1/2 rounded-lg bg-Bright-Orange px-4 py-2 font-semibold cursor-pointer'>
                  ADD TO CART
                </button>
              }
              <button className='w-1/2 flex items-center justify-center gap-2 rounded-lg border px-4 py-2 font-semibold hover:border-Bright-Orange hover:text-Bright-Orange transition-all ease-in duration-200 cursor-pointer'>
                <FaHeart /> ADD TO WISHLIST
              </button>
            </div>
            <div className='flex text-xl gap-5 items-center mt-4'>
              <span>Share</span>
              <div className='flex cursor-pointer items-center text-2xl gap-3'>
                <FaWhatsapp />
                <FaFacebook />
                <CiTwitter />
                <FaInstagram />
              </div>
            </div>
            <div className='mt-5'>
              <h1 className='text-2xl font-semibold'>Product Description</h1>
              <p className='text-sm tracking-wider mt-2'>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
