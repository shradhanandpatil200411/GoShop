export default function ProductCard({
  title,
  subCategory,
  price,
  salePrice,
  description,
}) {
  return (
    <>
      <div className='w-full h-full'>
        <div className=' w-full h-7/12 overflow-hidden rounded-t-2xl'>
          <img className='w-full h-full ' src='' alt='product-img' />
        </div>
        <div className='flex flex-col gap-2 justify-evenly h-5/12 bg-white rounded-b-2xl px-2 pb-3'>
          <h1 className='text-xl  text-Deep-Navy-Blue font-bold'>
            {title ? title : "Title for the product"}
          </h1>
          <p className='text-sm font-semibold text-gray-400'>
            {subCategory ? subCategory : "T-shirt, Sweatshirt, Shirt...."}
          </p>
          <div className='overflow-hidden'>
            <p className='text-xs font-semibold text-gray-400'>
              {description
                ? description.split(50)
                : "write your product material,benefit and Category"}
            </p>
          </div>
          <div className='font-semibold'>
            <span className='pr-4 line-through text-gray-400'>
              ₹{price ? price : "1000"}
            </span>
            <span className='text-Deep-Navy-Blue'>
              ₹{salePrice ? salePrice : "500"}
            </span>
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
