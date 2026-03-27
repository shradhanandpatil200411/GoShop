import React from "react";

function CardShimmer() {
  return (
    <>
      <div className='h-[90vh] w-[20%] bg-gray-500 p-2'>
        <div className=' w-full bg-gray-700 h-1/2'></div>
        <div>
          <div className='w-full h-10 mt-2  bg-gray-700'></div>
          <div className='w-1/2 h-5 mt-2  bg-gray-700'></div>
          <div className='w-8/12 h-20 mt-2  bg-gray-700'></div>
        </div>
        <div className='flex mx-4 w-full'>
          <div className='w-20 bg-gray-700 '></div>
          <div className='w-20 bg-gray-700 '></div>
        </div>
      </div>
    </>
  );
}

export default CardShimmer;
