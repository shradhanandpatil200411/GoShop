import React from "react";

const StoreLogo = () => {
  return (
    <div className='flex items-center gap-2 select-none cursor-pointer group'>
      <svg
        className='w-10 h-10 shrink-0 group-hover:-translate-y-1 transition-transform duration-300'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        {/* Cart Body - Orange */}
        <path
          d='M4.73794 16.5C3.82076 16.5 3.27972 15.6776 3.69946 14.969L6.2853 10.6042C6.77428 9.77865 6.91562 8.82336 6.73794 7.88657L5.99994 4H2.99994V2H6.99994L8.70333 10.9756L6.58713 14.5482L17.3945 14.5C18.0543 14.5 18.5955 14.0235 18.717 13.3815L20.8006 2.38147L22.7663 2.75395L20.6827 13.7539C20.388 15.3098 19.0755 16.5 17.3945 16.5H4.73794ZM7.49994 21.5C6.39537 21.5 5.49994 20.6046 5.49994 19.5C5.49994 18.3954 6.39537 17.5 7.49994 17.5C8.60451 17.5 9.49994 18.3954 9.49994 19.5C9.49994 20.6046 8.60451 21.5 7.49994 21.5ZM17.4999 21.5C16.3954 21.5 15.4999 20.6046 15.4999 19.5C15.4999 18.3954 16.3954 17.5 17.4999 17.5C18.6045 17.5 19.4999 18.3954 19.4999 19.5C19.4999 20.6046 18.6045 21.5 17.4999 21.5Z'
          fill='#FF9F1C'
        />
        {/* Lightning Bolt - White */}
        <path d='M13 2L11 8H15L9 14L11 8H7L13 2Z' fill='#FFFFFF' />
      </svg>

      <h1 className='text-4xl font-black italic  text-white'>
        Go<span className='text-Bright-Orange not-italic'>Shop</span>
      </h1>
    </div>
  );
};

export default StoreLogo;
