import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateCart } from "../Store/Reducer/productSlice";

function MyOrder() {
  const { cart } = useSelector((store) => store.product);

  const dispatch = useDispatch();

  const handelIncrement = (i) => {
    dispatch(updateCart({ type: "incrementQuantity", index: i }));
  };

  const handelDecrement = (i) => {
    dispatch(updateCart({ type: "decrementQuantity", index: i }));
  };

  return (
    <div className='h-12/12 p-5 border'>
      <h1 className='font-semibold text-2xl'>My Order</h1>
      {cart.length === 0 ?
        <div className='w-fit mx-auto text-center mt-10 '>
          <h2 className='text-2xl'>Cart is empty 🙁 </h2>
          <NavLink
            to={"/home"}
            role='button'
            className='inline-block px-3 py-2 border rounded-2xl mt-10 font-semibold hover:bg-amber-400 cursor-pointer'>
            Shop Now
          </NavLink>
        </div>
      : <div className='overflow-y-scroll h-11/12 scroll-smooth'>
          {cart?.map((p, i) => (
            <div
              key={p.id}
              className='flex gap-4 bg-cyan-800 my-4 shadow-2xl p-4'>
              <div className='w-3/12 h-60'>
                <img
                  className='bg-cover w-full h-full'
                  src={p.img}
                  alt={p.title}
                />
              </div>
              <div className='w-6/12'>
                <h2 className='font-bold text-2xl '>{p.title}</h2>
                <p className='text-gray-300'>
                  {p.description.slice(0, 140)}...
                </p>
                <div className=' font-bold text-lg'>
                  <div>
                    Size :{" "}
                    <span className='uppercase'>{p.size.selectSize}</span>
                  </div>
                  <div className='flex gap-3 '>
                    <button
                      className='cursor-pointer text-xl '
                      onClick={() => handelIncrement(i)}>
                      +
                    </button>
                    {p.quantity}
                    <button
                      className='cursor-pointer text-xl '
                      onClick={() => handelDecrement(i)}>
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default MyOrder;
