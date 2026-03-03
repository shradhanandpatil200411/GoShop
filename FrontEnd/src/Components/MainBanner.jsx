import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MainBanner() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'>
        <div>
          <img
            src='https://ik.imagekit.io/shradhanand/GoShop/Banners/Banner5.avif'
            alt='banner1'
          />
        </div>
        <div>
          <img
            src='https://ik.imagekit.io/shradhanand/GoShop/Banners/Banner1.avif'
            alt='banner2'
          />
        </div>
        <div>
          <img
            src='https://ik.imagekit.io/shradhanand/GoShop/Banners/Banner3.avif'
            alt='banner3'
          />
        </div>
        <div>
          <img
            src='https://ik.imagekit.io/shradhanand/GoShop/Banners/Banner5.avif'
            alt='banner4'
          />
        </div>
        <div>
          <img
            src='https://ik.imagekit.io/shradhanand/GoShop/Banners/Banner2.avif'
            alt='banner5'
          />
        </div>
      </Carousel>
    </>
  );
}

export default MainBanner;
