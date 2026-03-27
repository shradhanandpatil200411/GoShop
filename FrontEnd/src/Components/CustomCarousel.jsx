import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const data = [
  "https://ik.imagekit.io/shradhanand/GoShop/Banners/Banner5.avif",
  "https://ik.imagekit.io/shradhanand/GoShop/Banners/Banner1.avif",
  "https://ik.imagekit.io/shradhanand/GoShop/Banners/Banner3.avif",
  "https://ik.imagekit.io/shradhanand/GoShop/Banners/Banner5.avif",
  "https://ik.imagekit.io/shradhanand/GoShop/Banners/Banner2.avif",
];

function CustomCarousel() {
  const [carousel, setCarousel] = useState(0);

  const handelCarouselNext = () => {
    if (carousel < data.length - 1) {
      setCarousel((prev) => prev + 1);
    } else {
      setCarousel(0);
    }
  };
  const handelCarouselProves = () => {
    if (carousel > 0) {
      setCarousel((prev) => prev - 1);
    } else {
      setCarousel(data.length - 1);
    }
  };
  return (
    <>
      <section className='relative'>
        <button className='absolute left-20 cursor-pointer bg-black/40 rounded-full top-[50%] -translate-[50%]'>
          <MdOutlineKeyboardArrowLeft
            onClick={handelCarouselProves}
            className='text-5xl text-white'
          />
        </button>
        <div>
          <img src={data[carousel]} alt='banner' />
        </div>
        <button className='absolute right-20 rotate-180 cursor-pointer bg-black/40 rounded-full top-[50%] -translate-[50%]'>
          <MdOutlineKeyboardArrowLeft
            onClick={handelCarouselNext}
            className='text-5xl text-white'
          />
        </button>
      </section>
    </>
  );
}

export default CustomCarousel;
