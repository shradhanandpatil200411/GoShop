import ProductCard from "../Components/ProductCard";

function Home() {
  return (
    <>
      <div className='w-full  pt-20 '>
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
