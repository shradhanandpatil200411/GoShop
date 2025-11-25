import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncRegisterUserAction } from "../Store/Actions/userActions";
import { useState } from "react";
function AuthenticationPage() {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "vicky",
      lastName: "patil",
      email: "shradhanand@gmail.com",
      password: "Shradhanand@123",
    },
  });
  const submitHandler = (user, e) => {
    e.preventDefault();
    const sendUser = {
      fullName: { firstName: user.firstName, lastName: user.lastName },
      email: user.email,
      password: user.password,
    };
    dispatch(asyncRegisterUserAction(sendUser));
    reset();
  };
  return (
    <>
      <section>
        <div className='h-screen bg-Deep-Navy-Blue'>
          <div className='h-[30vh] px-10 w-fit gap-2 flex flex-col justify-end py-5 text-white '>
            <h1 className='text-5xl font-bold'>
              {isLogin ? "Welcome Back!" : "Get Started"}
            </h1>
            <p className='text-xl font-thin text-gray-400'>
              {isLogin
                ? "Sign in to continue to your account."
                : "Join us and start shopping today."}
            </p>
          </div>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className='rounded-tr-[30%] mx-auto h-[70vh] px-10 bg-gray-200 py-10'>
            <div className='my-5'>
              <h1 className='text-Deep-Navy-Blue font-bold text-4xl'>
                {isLogin ? "Login" : "Sign Up"}
              </h1>
            </div>
            {/* firstName input */}
            <div
              className='flex flex-col gap-1 mt-4 group h-[15%]'
              style={isLogin ? { display: "none" } : { display: "flex" }}>
              <label
                htmlFor='firstName'
                className='text-lg  group-focus-within:text-Deep-Navy-Blue group-focus-within:font-semibold'>
                FirstName
              </label>
              <input
                {...register("firstName", { required: "This is required" })}
                className=' outline-none rounded-lg px-2 py-2 bg-white group-focus-within:border-Deep-Navy-Blue! group-focus-within:border-2!'
                style={
                  errors.firstName?.message
                    ? { border: "2px solid red" }
                    : { border: "1px solid black" }
                }
                type='text'
                id='firstName'
              />
              <p className='text-red-500 font-semibold w-fit ml-48'>
                {errors.firstName?.message}
              </p>
            </div>
            {/* lastName input */}
            <div
              className='flex flex-col gap-1 mt-2 group h-[15%]'
              style={isLogin ? { display: "none" } : { display: "flex" }}>
              <label
                htmlFor='lastName'
                className='text-lg  group-focus-within:text-Deep-Navy-Blue group-focus-within:font-semibold'>
                LastName
              </label>
              <input
                {...register("lastName", { required: "This is required" })}
                className='border outline-none rounded-lg px-2 py-2 bg-white group-focus-within:border-Deep-Navy-Blue! group-focus-within:border-2! '
                style={
                  errors.lastName?.message
                    ? { border: "2px solid red" }
                    : { border: "1px solid black" }
                }
                type='text'
                id='lastName'
              />
              <p className='text-red-500 font-semibold w-fit ml-48'>
                {errors.lastName?.message}
              </p>
            </div>
            {/* email input */}
            <div className='flex flex-col gap-1 mt-2 group h-[15%]'>
              <label
                htmlFor='email'
                className='text-lg  group-focus-within:text-Deep-Navy-Blue group-focus-within:font-semibold'>
                Email
              </label>
              <input
                {...register("email", { required: "This is required" })}
                style={
                  errors.email?.message
                    ? { border: "2px solid red" }
                    : { border: "1px solid black" }
                }
                className='border outline-none rounded-lg px-2 py-2 bg-white group-focus-within:border-Deep-Navy-Blue! group-focus-within:border-2!'
                type='email'
                id='email'
              />
              <p className='text-red-500 font-semibold w-fit ml-48'>
                {errors.email?.message}
              </p>
            </div>
            {/* password input */}
            <div className='flex flex-col gap-1 mt-2 group h-[15%]'>
              <label
                htmlFor='password'
                className='text-lg  group-focus-within:text-Deep-Navy-Blue group-focus-within:font-semibold'>
                Password
              </label>
              <input
                {...register("password", {
                  required: "This is required",
                  minLength: { value: 6, message: "Minimum length is 6" },
                })}
                style={
                  errors.password?.message
                    ? { border: "2px solid red" }
                    : { border: "1px solid black" }
                }
                className='border outline-none rounded-lg px-2 py-2 bg-white group-focus-within:border-Deep-Navy-Blue! group-focus-within:border-2!'
                type='password'
                id='password'
              />
              <p className='text-red-500 font-semibold  w-fit ml-48'>
                {errors.password?.message}
              </p>
            </div>
            <div className='mt-8 bg-Bright-Orange text-lg text-white font-semibold text-center rounded-lg px-4 py-2 w-full'>
              <button className='w-full outline-none border-none'>
                {isLogin ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <div className='mt-2 flex gap-2 text-lg '>
              <p>{isLogin ? "New here?" : "Already have an account ?"}</p>{" "}
              <p
                className='text-Deep-Navy-Blue font-semibold text-xl'
                onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Create Account" : "Login"}
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default AuthenticationPage;
