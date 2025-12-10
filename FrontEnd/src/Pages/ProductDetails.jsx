import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "../API/axios";
import { toast } from "react-toastify";
import { FaFacebook, FaHeart } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [sizeSelect, setSizeSelect] = useState(null);
  const { id } = useParams();

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

  const {
    title,
    description,
    price,
    salePrice,
    sizes,
    averageReview,
    brand,
    category,
    colors,
    subCategory,
  } = product.productDetails;

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
            <p className='text-xl font-semibold'>Please select a size.</p>
            <div className='flex gap-10 mt-5'>
              {sizes.map((sizeObj, index) => {
                const sizeName = Object.keys(sizeObj)[0];
                const isAvailable = sizeObj[sizeName];
                return (
                  <div
                    key={index}
                    className={`text-lg border-2 text-center font-semibold p-2 w-14 ${
                      sizeName == sizeSelect
                        ? "border-Bright-Orange text-Bright-Orange "
                        : "border-gray-500 "
                    }`}
                    onClick={() => {
                      if (isAvailable) {
                        setSizeSelect(sizeName);
                      }
                    }}
                    style={
                      isAvailable
                        ? { font: "bold", cursor: "pointer" }
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
          </div>
          <div className='flex flex-col gap-5'>
            <div>
              <label className='mx-2' htmlFor='quantity'>
                Quantity
              </label>
              <select
                id='quantity'
                className='text-black  bg-white outline-none'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
              </select>
            </div>
            <div className='flex gap-10 justify-between w-10/12'>
              <button className='w-1/2 rounded-lg bg-Bright-Orange px-4 py-2 font-semibold cursor-pointer'>
                ADD TO CARD
              </button>
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
