import { useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetAllProducts } from "../Store/Actions/productAction";

function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);

  useEffect(() => {
    products.length == 0 && dispatch(asyncGetAllProducts());
  }, []);
  return (
    <>
      <div className='w-full h-[200vh]  pt-20 '>
        <div className='flex w-full gap-10 flex-wrap justify-center'>
          <div className='lg:w-[20%] lg:h-[65%]  w-[80%] h-[50%]'>
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
