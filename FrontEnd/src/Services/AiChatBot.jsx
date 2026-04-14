import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

function AiChatBot() {
  const [startChat, setStartChat] = useState(false);
  const handelStartChat = () => {
    setStartChat(true);
  };
  return (
    <div className='fixed bg-white  rounded shadow-2xl  z-50 bottom-10  right-20 '>
      {startChat ?
        <div className='h-96 w-72 '>
          <div className='h-1/12 bg-linear-to-r from-Deep-Navy-Blue to-cyan-500 text-white text-center flex justify-between px-4  items-center'>
            <h1 className='font-semibold text-sm'>GoShop Start Conversion</h1>
            <span className='text-white  cursor-pointer'>
              <IoIosCloseCircle className='size-6' />
            </span>
          </div>
          <div className='h-9/12 '>message</div>
          <div className='h-2/12 px-4 pb-1 w-full  flex'>
            <input
              className='border-cyan-600 border-2 w-9/12 outline-cyan-500'
              type='text'
            />{" "}
            <button className='bg-linear-to-r  from-Deep-Navy-Blue to-cyan-500 text-white px-4 py-1 rounded cursor-pointer'>
              Send
            </button>
          </div>
        </div>
      : <div className='rounded-full cursor-pointer'>
          <img
            onClick={handelStartChat}
            className='bg-cover w-20 h-20'
            src='https://ik.imagekit.io/shradhanand/GoShop/AI/goShop-AI-removebg-preview.png'
            alt='ai-chat-bot'
          />
        </div>
      }
    </div>
  );
}

export default AiChatBot;
