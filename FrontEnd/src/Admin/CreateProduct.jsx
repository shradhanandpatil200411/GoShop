import { useForm } from "react-hook-form";
import InputFiled from "../Components/InputFiled";
import { asyncCreateProduct } from "../Store/Actions/productAction";
import { useDispatch } from "react-redux";

export default function CreateProduct() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const inputClass = (errors) => {
    return `outline-none px-2 text-lg py-1  w-full rounded-lg focus-within:border-Bright-Orange ${
      errors ? "border-red-400 border-2" : "border-2"
    }`;
  };

  const submitHandler = (productData) => {
    const file = productData.img;
    const {
      title,
      description,
      category,
      subCategory,
      brand,
      price,
      salePrice,
      totalStock,
      colors,
      tag,
      xxl,
      xl,
      l,
      sm,
      xs,
    } = productData;
    const color = colors.split(",");
    const tags = tag.split(",");

    const size = [{ xxl: xxl }, { xl: xl }, { l: l }, { sm: sm }, { xs: xs }];

    const formData = new FormData();
    formData.append("image", file[0]);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("brand", brand);
    formData.append("price", price);
    formData.append("salePrice", salePrice);
    formData.append("totalStock", totalStock);
    formData.append("colors", JSON.stringify(color));
    formData.append("sizes", JSON.stringify(size));
    formData.append("tags", JSON.stringify(tags));

    dispatch(asyncCreateProduct(formData));
    reset();
  };

  return (
    <>
      <section className='pt-20 pb-5 px-5 bg-Deep-Navy-Blue flex flex-col lg:flex lg:flex-row  text-white '>
        <div className='lg:h-screen h-[30vh] lg:w-1/2 border'>
          <h1>Demo card</h1>
        </div>
        <div>
          <form className='mt-5' onSubmit={handleSubmit(submitHandler)}>
            <div className='flex gap-2 '>
              <div className='w-8/12'>
                <InputFiled
                  register={register}
                  name='title'
                  isRequire='Title is require'
                  errors={errors.title}
                  minLength='4'
                  maxLength='50'
                  inputType='text'
                  placeholder='Title'
                />
              </div>

              <div className='w-6/12'>
                <InputFiled
                  register={register}
                  name='img'
                  isRequire='Img is require'
                  errors={errors.img}
                  inputType='file'
                />
              </div>
            </div>

            <div className='w-full mt-3 group'>
              <label
                className='pr-2 text-lg group-focus-within:text-Bright-Orange'
                htmlFor='category'>
                Category
              </label>
              <select
                {...register("category", { required: "category is require" })}
                className='bg-Deep-Navy-Blue text-sm w-1/2 rounded group-focus-within:border-Bright-Orange  outline-none  border-2'
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
            <div className='w-full mt-3'>
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
            <div className='flex gap-5'>
              <div className='w-full mt-3'>
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
              <div className='w-full mt-3'>
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
            </div>
            <div>
              <div className='w-full mt-3'>
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
              <div className='w-full mt-3'>
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
              <div className='w-full mt-3'>
                <InputFiled
                  register={register}
                  name='colors'
                  isRequire='false'
                  errors={errors.colors}
                  minLength='2'
                  maxLength='50'
                  inputType='text'
                  placeholder='Colors'
                />
              </div>
              <div className='flex gap-2 w-full mt-3 group'>
                <div>
                  <label className='mx-1 text-2xl' htmlFor='xxl'>
                    XXL
                  </label>
                  <input
                    {...register("xxl")}
                    className='size-5'
                    type='checkbox'
                    id='xxl'
                  />
                </div>
                <div>
                  <label className='mx-1 text-2xl' htmlFor='xl'>
                    XL
                  </label>
                  <input
                    {...register("xl")}
                    className='size-5'
                    type='checkbox'
                    id='xl'
                  />
                </div>
                <div>
                  <label className='mx-1 text-2xl' htmlFor='l'>
                    L
                  </label>
                  <input
                    {...register("l")}
                    className='size-5'
                    type='checkbox'
                    id='l'
                  />
                </div>
                <div>
                  <label className='mx-1 text-2xl' htmlFor='sm'>
                    SM
                  </label>
                  <input
                    {...register("sm")}
                    className='size-5'
                    type='checkbox'
                    id='sm'
                  />
                </div>
                <div>
                  <label className='mx-1 text-2xl' htmlFor='xs'>
                    XS
                  </label>
                  <input
                    {...register("xs")}
                    className='size-5'
                    type='checkbox'
                    id='xs'
                  />
                </div>
              </div>
              <div className='w-full mt-3'>
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
            </div>
            <div className='w-full mt-3'>
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
            <div className='mt-4 mx-auto w-1/2'>
              <button className='bg-Bright-Orange w-full px-4 py-2  rounded '>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
