import React from "react";
import StoreLogo from "./StoreLogo";

function Navbar() {
  return (
    <>
      <nav className='flex justify-between px-4 py-5 bg-Deep-Navy-Blue/10  fixed backdrop-blur-2xl w-full z-50'>
        <div>
          <StoreLogo />
        </div>
        <div className='hidden'>
          <ul className='flex gap-2'>
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Card</li>
            <li>Profile</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
