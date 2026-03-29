import React from "react";
import { useSelector } from "react-redux";

function MyOrder() {
  const { cart } = useSelector((store) => store.product);

  return (
    <div className='h-12/12 p-5 border'>
      <h1 className='font-semibold text-2xl'>My Order</h1>
      <div className='overflow-y-scroll h-11/12 scroll-smooth'>
        {cart?.map((p) => (
          <div className='flex gap-4 bg-cyan-800 my-4 shadow-2xl p-4'>
            <div className='w-3/12 h-60'>
              <img
                className='bg-cover w-full h-full'
                src={p.img}
                alt={p.title}
              />
            </div>
            <div className='w-6/12'>
              <h2 className='font-semibold '>{p.title}</h2>
              <p>{p.description.slice(0, 140)}...</p>
              <div className='flex gap-5 font-bold text-2xl'>
                <div>size:{p.size}</div>
                <div>quantity:{p.quantity}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrder;
