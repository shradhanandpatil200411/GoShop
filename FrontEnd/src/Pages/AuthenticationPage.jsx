import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useGSAP } from "@gsap/react";

import {
  asyncLoginUserAction,
  asyncRegisterUserAction,
} from "../Store/Actions/userActions";
import gsap from "gsap";
import { useRef } from "react";
import { SplitText } from "gsap/all";

function AuthenticationPage() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fromRef = useRef();
  const headingRef = useRef();
  const paraRef = useRef();

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

  const { contextSafe } = useGSAP(
    () => {
      let tl = gsap.timeline();
      // let split = SplitText.create(headingRef.current, { type: "chars" });
      tl.from(headingRef.current, {
        x: -100,
        opacity: 0,
        stagger: 0.1,
      });
      tl.from(paraRef.current, {
        x: -100,
        opacity: 0,
      });
      tl.from(fromRef.current, {
        x: 500,
        opacity: 0,
      });

      tl.from(".input", {
        y: 10,
        opacity: 0,
        stagger: 0.1,
      });
    },
    { revertOnUpdate: true }
  );

  const handelLogin = contextSafe(() => {
    gsap.from(".section", {
      onStart: () => {
        setIsLogin(!isLogin);
      },
      x: 100,
      opacity: 0,
    });
    gsap.from(".input", {
      onStart: () => {
        setIsLogin(!isLogin);
      },
      y: 100,
      opacity: 0,
      stagger: 0.4,
    });
  });

  const submitHandle = (data) => {
    if (isLogin) {
      const loginData = { email: data.email, password: data.password };
      dispatch(asyncLoginUserAction(loginData, navigate));
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
    return ` w-full outline-none rounded-lg px-3 lg:h-10 lg:py-2 py-3 bg-white border-2 transition-colors duration-200
      ${
        error
          ? "border-red-500 focus:border-red-500"
          : "border-gray-200 focus:border-[#FF9F1C]"
      }`;
  };

  const sectionClass = (isLogin) => {
    return `h-screen lg:flex ${
      isLogin && "lg:flex-row-reverse"
    } lg:w-7/12 lg:h-[75vh] lg:rounded-4xl lg:mx-auto bg-Deep-Navy-Blue overflow-hidden`;
  };

  const formClass = (isLogin) => {
    return `form h-[70vh] lg:h-full lg:w-1/2 lg:pt-5 bg-gray-100 rounded-tr-[30%] lg:rounded-tr-none lg:rounded-bl-[30%] ${
      isLogin && "lg:rounded-br-[30%] lg:rounded-bl-none"
    } px-8 pt-10 shadow-2xl`;
  };

  return (
    <div className='lg:pt-24 bg-linear-to-r  from-Deep-Navy-Blue h-screen to-[#0c7075]'>
      <section className={sectionClass(isLogin)}>
        {/* --- HEADER SECTION --- */}
        <div className='section h-[30vh] lg:w-5/12 lg:justify-center lg:h-full lg:px-5  px-10 w-full max-w-lg mx-auto flex flex-col justify-end py-8 text-white'>
          <h1 ref={headingRef} className='text-4xl lg:text-5xl font-bold mb-2 '>
            {isLogin ? "Welcome Back!" : "Get Started"}
          </h1>
          <p ref={paraRef} className='text-lg font-light text-gray-300'>
            {isLogin
              ? "Sign in to continue to your account."
              : "Join us and start shopping today."}
          </p>
        </div>

        {/* --- FORM SECTION --- */}
        <div className={formClass(isLogin)}>
          <form
            ref={fromRef}
            onSubmit={handleSubmit(submitHandle)}
            className='max-w-lg mx-auto flex flex-col gap-4 '>
            <h2 className='text-Deep-Navy-Blue font-bold text-3xl mb-2'>
              {isLogin ? "Sign In" : "Create Account"}
            </h2>

            {!isLogin && (
              <div className='flex gap-4 input'>
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
                <div className='w-1/2 flex flex-col gap-1 input'>
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
            <div className='flex flex-col gap-1 input'>
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
            <div className='flex flex-col gap-1 input'>
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
            <button className='mt-6 lg:mt-2 lg:py-2 bg-Bright-Orange active:scale-95 transition-transform text-white font-bold text-lg rounded-xl py-3 w-full shadow-lg shadow-orange-200 input'>
              {isLogin ? "Sign In" : "Sign Up"}
            </button>

            {/* Toggle Link */}
            <div className='mt-4 lg:mt-2 flex justify-center gap-2 text-gray-600 font-medium input'>
              <p>{isLogin ? "New here?" : "Already have an account?"}</p>
              <button
                type='button' // Important: Prevent form submit
                className='text-Deep-Navy-Blue font-bold hover:underline'
                onClick={handelLogin}>
                {isLogin ? "Create Account" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AuthenticationPage;
