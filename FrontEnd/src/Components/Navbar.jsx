import StoreLogo from "./StoreLogo";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useState } from "react";
import Nav from "./Nav";
import { NavLink } from "react-router";

function Navbar() {
  const { isAuthenticated, data } = useSelector((store) => store.user);
  const [menu, setMenu] = useState(true);
  const navList = ["home", "men", "women", "kid"];

  return (
    <>
      <nav className='flex justify-between items-center  bg-Deep-Navy-Blue/10 lg:bg-transparent  fixed backdrop-blur-2xl w-full z-50'>
        <NavLink to='/home' className='pl-4 py-5'>
          <StoreLogo />
        </NavLink>

        {isAuthenticated && (
          <>
            <NavLink to='/profile'>
              <CgProfile className='text-5xl text-Bright-Orange' />
            </NavLink>
            <div className='flex px-4 py-5' onClick={() => setMenu(!menu)}>
              {menu && (
                <IoMenu className='text-4xl cursor-pointer text-Bright-Orange' />
              )}
            </div>
            {!menu && (
              <>
                <div className='flex absolute top-0 w-screen h-screen bg-white/90 backdrop-blur-lg py-10 px-5'>
                  <div className='flex w-screen gap-20  flex-col'>
                    {navList.map((n, index) => (
                      <div className='mx-auto' key={index}>
                        <Nav
                          name={
                            n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
                          }
                          setMenu={setMenu}
                          menu={menu}
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
                  <RxCross2
                    onClick={() => setMenu(!menu)}
                    className='text-5xl text-Bright-Orange cursor-pointer'
                  />
                </div>
              </>
            )}
          </>
        )}
      </nav>
    </>
  );
}

export default Navbar;
