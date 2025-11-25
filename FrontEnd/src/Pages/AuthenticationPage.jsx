import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  asyncLoginUserAction,
  asyncRegisterUserAction,
} from "../Store/Actions/userActions";
import { useNavigate } from "react-router";

function AuthenticationPage() {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    reset();
    clearErrors();
  }, [isLogin, reset, clearErrors]);

  const submitHandle = (data) => {
    if (isLogin) {
      const loginData = { email: data.email, password: data.password };
      dispatch(asyncLoginUserAction(loginData));
      navigate("/home");
    } else {
      const registerData = {
        fullName: { firstName: data.firstName, lastName: data.lastName },
        email: data.email,
        password: data.password,
      };
      dispatch(asyncRegisterUserAction(registerData, setIsLogin));
    }

    reset();
  };

  const getInputClass = (error) => {
    return `w-full outline-none rounded-lg px-3 py-3 bg-white border-2 transition-colors duration-200
      ${
        error
          ? "border-red-500 focus:border-red-500"
          : "border-gray-200 focus:border-[#0C2D48]"
      }`;
  };

  return (
    <section className='h-screen bg-Deep-Navy-Blue overflow-hidden'>
      {/* --- HEADER SECTION --- */}
      <div className='h-[30vh] px-10 w-full max-w-lg mx-auto flex flex-col justify-end py-8 text-white'>
        <h1 className='text-4xl font-bold mb-2'>
          {isLogin ? "Welcome Back!" : "Get Started"}
        </h1>
        <p className='text-lg font-light text-gray-300'>
          {isLogin
            ? "Sign in to continue to your account."
            : "Join us and start shopping today."}
        </p>
      </div>

      {/* --- FORM SECTION --- */}
      <div className='h-[70vh] bg-gray-100 rounded-tr-[30%] px-8 pt-10 shadow-2xl'>
        <form
          onSubmit={handleSubmit(submitHandle)}
          className='max-w-lg mx-auto flex flex-col gap-4'>
          <h2 className='text-Deep-Navy-Blue font-bold text-3xl mb-2'>
            {isLogin ? "Sign In" : "Create Account"}
          </h2>

          {!isLogin && (
            <div className='flex gap-4'>
              {/* firstName */}
              <div className='w-1/2 flex flex-col gap-1'>
                <input
                  {...register("firstName", { required: "Required" })}
                  placeholder='First Name'
                  className={getInputClass(errors.firstName)}
                />
                {errors.firstName && (
                  <span className='text-xs text-red-500 pl-1'>
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              {/* lastName */}
              <div className='w-1/2 flex flex-col gap-1'>
                <input
                  {...register("lastName", { required: "Required" })}
                  placeholder='Last Name'
                  className={getInputClass(errors.lastName)}
                />
                {errors.lastName && (
                  <span className='text-xs text-red-500 pl-1'>
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Email */}
          <div className='flex flex-col gap-1'>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              placeholder='Email Address'
              type='email'
              className={getInputClass(errors.email)}
            />
            {errors.email && (
              <span className='text-xs text-red-500 pl-1'>
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className='flex flex-col gap-1'>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Min 6 characters" },
              })}
              placeholder='Password'
              type='password'
              className={getInputClass(errors.password)}
            />
            {errors.password && (
              <span className='text-xs text-red-500 pl-1'>
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button className='mt-6 bg-Bright-Orange active:scale-95 transition-transform text-white font-bold text-lg rounded-xl py-3 w-full shadow-lg shadow-orange-200'>
            {isLogin ? "Sign In" : "Sign Up"}
          </button>

          {/* Toggle Link */}
          <div className='mt-4 flex justify-center gap-2 text-gray-600 font-medium'>
            <p>{isLogin ? "New here?" : "Already have an account?"}</p>
            <button
              type='button' // Important: Prevent form submit
              className='text-Deep-Navy-Blue font-bold hover:underline'
              onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create Account" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuthenticationPage;
