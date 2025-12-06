export default function ProductCard({
  title,
  subCategory,
  price,
  salePrice,
  description,
  img,
}) {
  return (
    <>
      <div className='w-full h-full '>
        <div className=' w-full h-7/12 overflow-hidden rounded-t-2xl '>
          <img className='w-full h-full ' src={img} alt='product-img' />
        </div>
        <div className='flex flex-col gap-2 justify-evenly h-5/12 bg-white rounded-b-2xl px-2 pb-3'>
          <h1 className='text-xl truncate text-Deep-Navy-Blue font-bold'>
            {title}
          </h1>
          <p className='text-sm font-semibold text-gray-400'>{subCategory}</p>
          <div className='overflow-hidden'>
            <p className='text-xs font-semibold text-gray-400'>
              {description.slice(0, 100)} <small>...more</small>
            </p>
          </div>
          <div className='font-semibold'>
            <span className='pr-4 line-through text-gray-400'>₹{price}</span>
            <span className='text-Deep-Navy-Blue'>₹{salePrice}</span>
          </div>

          <div className='flex justify-between'>
            <button className='cursor-pointer px-4 py-2 border-Deep-Navy-Blue border text-black  rounded-lg font-semibold text-sm '>
              Add To Cart
            </button>
            <button className='cursor-pointer px-4 py-2 bg-Bright-Orange rounded-lg font-semibold text-sm text-white'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
