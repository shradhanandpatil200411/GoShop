import React from "react";

function Navbar() {
  return (
    <>
      <nav className='flex justify-between px-4 py-5 bg-white/10 fixed backdrop-blur-2xl w-full z-50'>
        <div>logo</div>
        <div>
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
