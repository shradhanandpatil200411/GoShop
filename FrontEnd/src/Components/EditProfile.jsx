import { useForm } from "react-hook-form";
import InputFiled from "./InputFiled";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUserAction } from "../Store/Actions/userActions";

function EditProfile() {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user?.data?.email,
      password: "00000000",
      firstName: user?.data?.fullName?.firstName,
      lastName: user?.data?.fullName?.lastName,
      gender: user?.data?.gender,
      dob: user?.data?.dataOfBirth,
      address: user?.data?.address,
      number: user?.data?.mobileNumber,
    },
  });

  const submitHandler = (data) => {
    dispatch(
      asyncUpdateUserAction({
        fullName: { firstName: data.firstName, lastName: data.lastName },
        gender: data.gender,
        dataOfBirth: data.dob,
        mobileNumber: data.number,
        address: data.address,
      }),
    );
  };
  return (
    <>
      <div className='border border-gray-400 px-5 py-2'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold my-2  pb-2'>Edit Profile</h1>
          <h1 className='text-lg font-semibold text-Bright-Orange cursor-pointer'>
            Change Password
          </h1>
        </div>
        <div className='flex gap-10 '>
          <div className='w-1/2'>
            <InputFiled
              register={register}
              name='email'
              disable='true'
              isRequire='email is require'
              errors={errors.email}
              inputType='email'
              minLength='5'
              maxLength='50'
              placeholder='email'
            />
          </div>
          <div className='w-1/2'>
            <InputFiled
              register={register}
              name='password'
              disable='true'
              isRequire='password is require'
              errors={errors.password}
              inputType='password'
              minLength='8'
              maxLength='20'
            />
          </div>
        </div>
      </div>
      <form
        className='border border-gray-400  px-5 py-2'
        onSubmit={handleSubmit(submitHandler)}>
        <h1 className='text-2xl font-bold py-2'>General Information </h1>
        <div className='flex gap-10'>
          <div className='w-1/2 gap-5'>
            <div className='my-2'>
              <label htmlFor='firstName'>First Name </label>
              <InputFiled
                register={register}
                name='firstName'
                isRequire='first name is require'
                errors={errors.firstName}
                inputType='text'
                minLength='2'
                maxLength='50'
              />
            </div>
            <div className='my-2'>
              <label htmlFor='lastName'>Last Name </label>
              <InputFiled
                register={register}
                name='lastName'
                isRequire='last name is require'
                errors={errors.lastName}
                inputType='text'
                minLength='2'
                maxLength='50'
              />
            </div>
            <div className='mt-2  gap-2'>
              <label className='text-xl' htmlFor='gender'>
                Gender
              </label>
              <div className='flex my-2 gap-10'>
                <div>
                  <input
                    {...register("gender")}
                    type='radio'
                    name='gender'
                    id='male'
                    value='male'
                  />
                  <label htmlFor='male'>Male</label>
                </div>
                <div>
                  <input
                    {...register("gender")}
                    type='radio'
                    name='gender'
                    id='female'
                    value='female'
                  />
                  <label htmlFor='female'>Female</label>
                </div>
                <div>
                  <input
                    {...register("gender")}
                    type='radio'
                    name='gender'
                    id='other'
                    value='other'
                  />
                  <label htmlFor='other'>Other</label>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <div className=''>
              <label htmlFor='dob'>Date of Birth </label>
              <InputFiled
                register={register}
                name='dob'
                isRequire='please add data of birth'
                errors={errors.dob}
                inputType='date'
              />
            </div>
            <div className='my-2'>
              <label htmlFor='number'>Mobile Number </label>
              <InputFiled
                register={register}
                name='number'
                isRequire='Mobile number is require'
                errors={errors.number}
                inputType='number'
                minLength='10'
                maxLength='10'
              />
            </div>
            <div className='my-2'>
              <label htmlFor='address'>Address</label>
              <InputFiled
                register={register}
                name='address'
                isRequire='address is require'
                errors={errors.address}
                inputType='text'
                minLength='10'
                maxLength='200'
              />
            </div>
          </div>
        </div>
        <div className='w-full my-2 flex justify-center'>
          <button className=' w-1/2 text-xl font-semibold rounded-xl cursor-pointer bg-Bright-Orange py-2'>
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default EditProfile;
