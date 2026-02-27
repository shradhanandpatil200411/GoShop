import { useForm } from "react-hook-form";
import InputFiled from "./InputFiled";

function EditProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm({
    defaultValues: {
      email: "shradhanand@gmail.com",
      password: "vicky",
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      address: "",
    },
  });

  const submitHandler = (e) => {
    e.preventDefault;
  };
  return (
    <>
      <div>
        <h1>Edit Profile</h1>
        <div className='w-1/2'>
          <InputFiled
            register={register}
            name='email'
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
            isRequire='password is require'
            errors={errors.password}
            inputType='password'
            minLength='8'
            maxLength='20'
          />
        </div>
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <h1>General Information </h1>
        <div>
          <input type='text' placeholder='first Name' />
          <input type='text' placeholder='last Name' />
        </div>
        <div>
          <input type='radio' name='gender' id='male' value='male' />
          <label htmlFor='male'>Male</label>
          <input type='radio' name='gender' id='female' value='female' />
          <label htmlFor='female'>Female</label>
          <input type='radio' name='gender' id='other' value='other' />
          <label htmlFor='other'>Other</label>
        </div>
        <div>
          <input type='date' placeholder='Date of birth' />
          <input type='number' placeholder='Mobile Number' />
          <input type='text' placeholder='Address' />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}

export default EditProfile;
