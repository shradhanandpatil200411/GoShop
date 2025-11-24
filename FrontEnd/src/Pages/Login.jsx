import React from "react";

function Login() {
  return (
    <>
      <section className=''>
        <div className='h-screen bg-Deep-Navy-Blue'>
          <div className='h-[30vh] px-10 w-fit flex flex-col justify-end py-5 text-white '>
            <h1 className='text-6xl font-bold'>Hello</h1>
            <p className='text-2xl font-thin'>Welcome to my store</p>
          </div>
          <form className='rounded-tr-[30%] mx-auto h-[70vh] px-10 bg-gray-200 py-10'>
            <div>
              <h1 className='text-Deep-Navy-Blue font-bold text-4xl'>
                Sign Up
              </h1>
            </div>
            <div className='flex flex-col gap-1 mt-5'>
              <label htmlFor='firstName' className='text-lg font-semibold'>
                FirstName
              </label>
              <input
                className='border outline-none rounded-lg px-2 py-2 bg-white '
                type='text'
                id='firstName'
              />
            </div>
            <div className='flex flex-col gap-1 mt-5'>
              <label htmlFor='lastName' className='text-lg font-semibold'>
                LastName
              </label>
              <input
                className='border outline-none rounded-lg px-2 py-2 bg-white '
                type='text'
                id='lastName'
              />
            </div>
            <div className='flex flex-col gap-1 mt-5'>
              <label htmlFor='email' className='text-lg font-semibold'>
                Email
              </label>
              <input
                className='border outline-none rounded-lg px-2 py-2 bg-white '
                type='email'
                id='email'
              />
            </div>
            <div className='flex flex-col gap-1 mt-5'>
              <label htmlFor='password' className='text-lg font-semibold'>
                Password
              </label>
              <input
                className='border outline-none rounded-lg px-2 py-2 bg-white'
                type='password'
                id='password'
              />
            </div>
            <div className='mt-5 bg-Bright-Orange text-lg text-white font-semibold text-center rounded-lg px-4 py-2 w-full'>
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
