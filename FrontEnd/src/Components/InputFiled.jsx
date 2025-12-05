import React from "react";

export default function InputFiled({
  register,
  name,
  isRequire,
  errors,
  minLength,
  maxLength,
  inputType,
  placeholder,
}) {
  const inputClass = (errors) => {
    return `outline-none px-2 text-lg py-1  w-full rounded-lg focus-within:border-Bright-Orange ${
      errors ? "border-red-400 border-2" : "border-2"
    }`;
  };
  return (
    <>
      <input
        {...register(name, {
          required: isRequire,
          minLength: {
            value: minLength,
            message: `Minimum ${minLength} length required`,
          },
          maxLength: {
            value: maxLength,
            message: "You reach the max length",
          },
        })}
        type={inputType}
        placeholder={placeholder}
        className={inputClass(errors)}
      />
      {errors && (
        <span className='text-xs text-red-500 pl-1 '>{errors.message}</span>
      )}
    </>
  );
}
