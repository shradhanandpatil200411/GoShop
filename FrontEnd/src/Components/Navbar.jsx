import StoreLogo from "./StoreLogo";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useState } from "react";
import Nav from "./Nav";
import { FaCartArrowDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { isAuthenticated, data } = useSelector((store) => store.user);
  const [menu, setMenu] = useState(false);
  const navList = ["home", "men", "women", "kid"];

  const { cart } = useSelector((store) => store.product);

  return (
    <>
      <nav className='flex  justify-between lg:justify-evenly items-center  bg-Deep-Navy-Blue/10 lg:bg-transparent  fixed backdrop-blur-2xl w-full z-50'>
        <NavLink to='/home' className='pl-4'>
          <StoreLogo />
        </NavLink>

        {isAuthenticated && (
          <>
            <div
              className='flex items-center px-4 '
              onClick={() => setMenu(!menu)}>
              <NavLink to='/profile'>
                <CgProfile className='text-5xl text-Bright-Orange pr-4  lg:invisible' />
              </NavLink>
              {menu && (
                <IoMenu className='text-4xl cursor-pointer  text-Bright-Orange' />
              )}
            </div>

            {!menu && (
              <>
                <div className='flex lg:relative  lg:h-[2vh] lg:w-1/2 absolute top-0 w-screen h-screen lg:bg-transparent lg:text-white bg-white/90 backdrop-blur-lg py-10  px-5'>
                  <div className='flex lg:flex-row w-screen gap-20 lg:gap-0 items-center  flex-col'>
                    {navList.map((n, index) => (
                      <div className='mx-auto' key={index}>
                        <Nav
                          name={
                            n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
                          }
                          route={"/" + n}
                        />
                      </div>
                    ))}
                    {data?.isAdmin && (
                      <Nav
                        name='Create Product'
                        setMenu={setMenu}
                        menu={menu}
                        route='/create-product'
                      />
                    )}
                  </div>
                  <div>
                    <RxCross2
                      onClick={() => setMenu(!menu)}
                      className='text-5xl text-Bright-Orange cursor-pointer lg:hidden'
                    />
                  </div>
                </div>
              </>
            )}
            <NavLink className='relative' to={"/profile"}>
              <FaCartArrowDown
                className={`text-2xl mx-2 text-white transition-all duration-300 ease-out hover:text-Bright-Orange cursor-pointer`}
              />
              <div className='absolute -top-3 right-0 text-Bright-Orange font-semibold text-lg'>
                {cart.length > 0 ? cart.length : ""}
              </div>
            </NavLink>
            <NavLink to='/profile' className='flex items-center'>
              <CgProfile className='text-5xl text-Bright-Orange pr-4 invisible lg:visible' />
              <h1 className='text-xl font-semibold text-white'>
                {data?.fullName?.firstName}
              </h1>
            </NavLink>
          </>
        )}
      </nav>
    </>
  );
}

export default Navbar;
