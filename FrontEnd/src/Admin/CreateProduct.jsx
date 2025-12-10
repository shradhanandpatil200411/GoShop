import { useForm } from "react-hook-form";
import InputFiled from "../Components/InputFiled";
import { asyncCreateProduct } from "../Store/Actions/productAction";
import { useDispatch } from "react-redux";
import { createFormData } from "../utils/createFormData";
import CreateProductCard from "../Components/createProductCard";

export default function CreateProduct() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const inputClass = (errors) => {
    return `outline-none px-2 text-lg py-1  w-full rounded-lg focus-within:border-Bright-Orange ${
      errors ? "border-red-400 border-2" : "border-2"
    }`;
  };

  const submitHandler = (productData) => {
    const data = createFormData(productData);
    dispatch(asyncCreateProduct(data));
  };

  return (
    <>
      <section className='pt-20 pb-5 lg:h-[120vh] h-[150vh] lg:px-20 lg:gap-10 flex flex-col lg:flex lg:flex-row  text-white '>
        <div className='lg:h-[80vh] w-9/12 mx-auto   h-[55vh]   lg:w-3/12  '>
          <CreateProductCard
            title={watch("title")}
            subCategory={watch("subCategory")}
            price={watch("price")}
            salePrice={watch("salePrice")}
            description={watch("description")}
          />
        </div>
        <div className='lg:w-8/12'>
          <form
            className='flex flex-col  gap-5 p-5'
            onSubmit={handleSubmit(submitHandler)}>
            <div className='flex gap-5 '>
              <div className='w-1/2'>
                <InputFiled
                  register={register}
                  name='title'
                  watch={watch}
                  isRequire='Title is require'
                  errors={errors.title}
                  minLength='4'
                  maxLength='50'
                  inputType='text'
                  placeholder='Title'
                />
              </div>

              <div className='w-1/2 flex gap-2 '>
                <InputFiled
                  register={register}
                  name='img'
                  id='img'
                  isRequire='Img is require'
                  errors={errors.img}
                  inputType='file'
                />
                <label
                  type='button'
                  htmlFor='img'
                  className='text-sm py-2 px-4 rounded cursor-pointer font-semibold h-10  border-none'
                  style={
                    watch("img")?.length > 0
                      ? { backgroundColor: "#32e854" }
                      : { backgroundColor: "#FF9F1C" }
                  }>
                  {watch("img")?.length > 0 ? "Done" : "Upload"}
                </label>
              </div>
            </div>

            <div className='flex w-full gap-5'>
              <div className='w-1/2  group '>
                <label
                  className='pr-2 text-lg group-focus-within:text-Bright-Orange'
                  htmlFor='category'>
                  Category
                </label>
                <select
                  {...register("category", { required: "category is require" })}
                  className='bg-Deep-Navy-Blue text-sm w-8/12 py-2 rounded group-focus-within:border-Bright-Orange  outline-none  border-2'
                  name='category'>
                  <option value='men'>Men</option>
                  <option value='women'>Women</option>
                  <option value='kids'>Kids</option>
                  <option value='accessories'>Accessories</option>
                </select>
                {errors.category && (
                  <span className='text-xs text-red-500 pl-1'>
                    {errors.category.message}
                  </span>
                )}
              </div>
              <div className='w-1/2 '>
                <InputFiled
                  register={register}
                  name='subCategory'
                  isRequire='Sub Category is require'
                  errors={errors.subCategory}
                  minLength='2'
                  maxLength='50'
                  inputType='text'
                  placeholder='Sub Category T-Shirt, Jeans, Sneakers....'
                />
              </div>
            </div>

            <div className='flex gap-5'>
              <div className='w-full '>
                <InputFiled
                  register={register}
                  name='price'
                  isRequire='Price is require'
                  errors={errors.price}
                  minLength='1'
                  maxLength='7'
                  inputType='number'
                  placeholder='Price'
                />
              </div>
              <div className='w-full '>
                <InputFiled
                  register={register}
                  name='salePrice'
                  isRequire='Sale price require'
                  errors={errors.salePrice}
                  minLength='1'
                  maxLength='7'
                  inputType='number'
                  placeholder='Sale Price'
                />
              </div>
              <div className='w-full'>
                <InputFiled
                  register={register}
                  name='totalStock'
                  isRequire='Total Stock is require'
                  errors={errors.totalStock}
                  minLength='1'
                  maxLength='6'
                  inputType='number'
                  placeholder='Total Stock'
                />
              </div>
            </div>

            <div className='flex flex-col gap-5'>
              <div className='flex gap-5 '>
                <div className='w-1/2'>
                  <InputFiled
                    register={register}
                    name='brand'
                    isRequire='Brand name is required'
                    errors={errors.brand}
                    minLength='2'
                    maxLength='50'
                    inputType='text'
                    placeholder='Brand Name'
                  />
                </div>
                <div className='w-1/2'>
                  <InputFiled
                    register={register}
                    name='colors'
                    isRequire={false}
                    errors={errors.colors}
                    minLength='2'
                    maxLength='50'
                    inputType='text'
                    placeholder='Colors'
                  />
                </div>
              </div>
              <div className='flex  gap-5'>
                <div className='w-1/2'>
                  <InputFiled
                    register={register}
                    name='tag'
                    isRequire='Tag is require'
                    errors={errors.tag}
                    minLength='2'
                    maxLength='50'
                    inputType='text'
                    placeholder='Tags Casual, Wedding, Party....'
                  />
                </div>
                <div className='flex  gap-2 w-1/2  group'>
                  <div>
                    <label className='lg:mx-1 lg:text-2xl' htmlFor='xxl'>
                      XXL
                    </label>
                    <input
                      {...register("xxl")}
                      className='lg:size-5 size-3'
                      type='checkbox'
                      id='xxl'
                    />
                  </div>
                  <div>
                    <label className='lg:mx-1 lg:text-2xl' htmlFor='xl'>
                      XL
                    </label>
                    <input
                      {...register("xl")}
                      className='lg:size-5 size-3'
                      type='checkbox'
                      id='xl'
                    />
                  </div>
                  <div>
                    <label className='lg:mx-1 lg:text-2xl' htmlFor='l'>
                      L
                    </label>
                    <input
                      {...register("l")}
                      className='lg:size-5 size-3'
                      type='checkbox'
                      id='l'
                    />
                  </div>
                  <div>
                    <label className='lg:mx-1 lg:text-2xl' htmlFor='sm'>
                      SM
                    </label>
                    <input
                      {...register("sm")}
                      className='lg:size-5 size-3'
                      type='checkbox'
                      id='sm'
                    />
                  </div>
                  <div>
                    <label className='lg:mx-1 lg:text-2xl' htmlFor='xs'>
                      XS
                    </label>
                    <input
                      {...register("xs")}
                      className='lg:size-5 size-3'
                      type='checkbox'
                      id='xs'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full '>
              <textarea
                {...register("description", {
                  required: "Description is required",
                  minLength: { value: 4, message: "Minim length required 6" },
                  maxLength: {
                    value: 500,
                    message: "You reach the max length",
                  },
                })}
                placeholder='Description'
                className={inputClass(errors.description)}
              />
              {errors.description && (
                <span className='text-xs text-red-500 pl-1'>
                  {errors.description.message}
                </span>
              )}
            </div>

            <div className='flex gap-2 mx-auto w-full'>
              <button className='bg-Bright-Orange w-1/2 px-4 py-2  rounded cursor-pointer '>
                Submit
              </button>
              <button
                type='button'
                onClick={() => {
                  reset();
                  console.log(watch("img"));
                }}
                className='bg-Deep-Navy-Blue w-1/2 px-4 py-2  rounded cursor-pointer '>
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
