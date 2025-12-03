import { useForm } from "react-hook-form";

export default function CreateProduct() {
  const {
    register,
    handelSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <section className='pt-24 px-5'>
        <div className='h-[40vh] border'>
          <h1>Demo card</h1>
        </div>
        <div>
          <form className='mt-5' onSubmit={handelSubmit}>
            <div className='flex gap-2 '>
              <div className='w-8/12'>
                <input
                  {...register("title", {
                    require: "Title is required",
                    minLength: { value: 6, message: "Minim length required 6" },
                  })}
                  type='text'
                  placeholder='Title'
                  className='outline-none border-2 px-2 text-lg py-1 border-b-Deep-Navy-Blue w-full rounded-lg '
                />
                {errors.title && (
                  <span className='text-xs text-red-500 pl-1'>
                    {errors.title.message}
                  </span>
                )}
              </div>

              <div className='w-6/12'>
                <input
                  {...register("img", {
                    require: "Image is require",
                  })}
                  type='file'
                  className='outline-none border-2 px-2 text-lg py-1 border-b-Deep-Navy-Blue w-full rounded-lg '
                />
                {errors.img && (
                  <span className='text-xs text-red-500 pl-1'>
                    {errors.img.message}
                  </span>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
