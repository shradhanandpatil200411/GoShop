import React from "react";

export default function InputFiled({
  register,
  name,
  isRequire,
  inputClass,
  errors,
  minLength,
  maxLength,
  inputType,
  placeholder,
}) {
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
        <span className='text-xs text-red-500 pl-1'>{errors.message}</span>
      )}
    </>
  );
}
