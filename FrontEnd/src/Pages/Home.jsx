import { useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetAllProducts } from "../Store/Actions/productAction";
import { NavLink } from "react-router";

function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);

  useEffect(() => {
    products.length == 0 && dispatch(asyncGetAllProducts());
  }, [products]);
  return (
    <>
      <div className='w-full  pt-20 '>
        <div className='w-full  '>
          <div className=' flex flex-wrap gap-10 justify-center'>
            {products.map((p) => {
              const { title, description, subCategory, price, salePrice } =
                p.productDetails;
              return (
                <NavLink
                  to={`/product-detail/${p._id}`}
                  className='lg:w-[20%] lg:h-[65%]  w-[80%] h-[50%]'
                  key={p._id}>
                  <ProductCard
                    title={title}
                    img={p.imageInfo.imgUrl}
                    description={description}
                    subCategory={subCategory}
                    price={price}
                    salePrice={salePrice}
                  />
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
