import { useForm } from "react-hook-form";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <section className=''>
        <div className='h-screen bg-Deep-Navy-Blue'>
          <div className='h-[30vh] px-10 w-fit flex flex-col justify-end py-5 text-white '>
            <h1 className='text-6xl font-bold'>Hello</h1>
            <p className='text-2xl font-thin'>Welcome to my store</p>
          </div>
          <form
            onSubmit={handleSubmit((user, e) => {
              e.preventDefault();
              console.log(user);
            })}
            className='rounded-tr-[30%] mx-auto h-[70vh] px-10 bg-gray-200 py-10'>
            <div>
              <h1 className='text-Deep-Navy-Blue font-bold text-4xl'>
                Sign Up
              </h1>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
              <label htmlFor='firstName' className='text-lg font-semibold'>
                FirstName
              </label>
              <input
                {...register("firstName", { required: "This is required" })}
                className='border outline-none rounded-lg px-2 py-2 bg-white '
                style={
                  errors.firstName?.message
                    ? { border: "2px solid red" }
                    : { border: `2px solid black` }
                }
                type='text'
                id='firstName'
              />
              <small className='text-red-500 font-semibold'>
                {errors.firstName?.message}
              </small>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
              <label htmlFor='lastName' className='text-lg font-semibold'>
                LastName
              </label>
              <input
                {...register("lastName", { required: "This is required" })}
                className='border outline-none rounded-lg px-2 py-2 bg-white '
                style={
                  errors.lastName?.message
                    ? { border: "2px solid red" }
                    : { border: "2px solid black" }
                }
                type='text'
                id='lastName'
              />
              <small className='text-red-500 font-semibold'>
                {errors.lastName?.message}
              </small>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
              <label htmlFor='email' className='text-lg font-semibold'>
                Email
              </label>
              <input
                {...register("email", { required: "This is required" })}
                style={
                  errors.email?.message
                    ? { border: "2px solid red" }
                    : { border: "2px solid black" }
                }
                className='border outline-none rounded-lg px-2 py-2 bg-white '
                type='email'
                id='email'
              />
              <small className='text-red-500 font-semibold'>
                {errors.email?.message}
              </small>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
              <label htmlFor='password' className='text-lg font-semibold'>
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
                    : { border: "2px solid black" }
                }
                className='border outline-none rounded-lg px-2 py-2 bg-white'
                type='password'
                id='password'
              />
              <small className='text-red-500 font-semibold'>
                {errors.password?.message}
              </small>
            </div>
            <div className='mt-2 bg-Bright-Orange text-lg text-white font-semibold text-center rounded-lg px-4 py-2 w-full'>
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
