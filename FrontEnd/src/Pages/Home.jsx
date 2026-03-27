import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { NavLink } from "react-router";
import MainBanner from "../Components/MainBanner";
import CardShimmer from "../Components/ShimmerUi/CardShimmer";
import axios from "../API/axios";
import { toast } from "react-toastify";
import CarouselShimmer from "../Components/ShimmerUi/CarouselShimmer";
import CustomCarousel from "../Components/CustomCarousel";

function Home() {
  const [showShimmer, setShowShimmer] = useState(false);
  const [product, setProduct] = useState([]);

  const fetchProductData = async () => {
    try {
      setShowShimmer(true);
      const { data } = await axios.get("/product");
      setProduct((prev) => [...prev, ...(data?.data?.getAllProducts || [])]);
      setShowShimmer(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handelScroll = () => {
    if (
      window.scrollY + window.innerHeight - 13 >=
      window.document.body.scrollHeight
    ) {
      setShowShimmer(true);
      fetchProductData();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchProductData();
    };
    fetchData();
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <>
      <div className='w-full  pt-20 '>
        <div className='w-full  '>
          <div>
            {showShimmer ?
              <CarouselShimmer />
            : <div>
                <CustomCarousel />
              </div>
            }
          </div>
          <h1 className='my-10 text-white text-2xl font-bold px-4'>
            Recommend for you
          </h1>
          <div className=' flex flex-wrap gap-10 justify-center'>
            {product?.map((p) => {
              const { title, description, subCategory, price, salePrice } =
                p.productDetails;
              return showShimmer ?
                  <CardShimmer />
                : <NavLink
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
                  </NavLink>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
