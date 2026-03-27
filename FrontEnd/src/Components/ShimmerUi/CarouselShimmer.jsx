import React from "react";

function CarouselShimmer() {
  return (
    <>
      <div className='flex w-screen h-96 relative  bg-linear-to-l from-gray-300 to-gray-500'>
        <div className='absolute w-20 bg-gray-700 h-full left-0 '></div>
        <div className='absolute w-20 bg-gray-700 h-full right-0 '></div>
      </div>
    </>
  );
}

export default CarouselShimmer;
