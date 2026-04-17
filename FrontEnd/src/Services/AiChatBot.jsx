import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import io from "socket.io-client";
import ReactMarkdown from "react-markdown";

function AiChatBot() {
  const [startChat, setStartChat] = useState(false);
  const [inputMessage, setInputMessage] = useState("");

  const [message, setMessage] = useState([]);

  const socket = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  useEffect(() => {
    if (startChat) {
      socket.current = io("http://localhost:3000");

      socket.current.on("ai-response", (response) => {
        const aiResponse = {
          role: "model",
          message: response.response,
        };
        setMessage((prev) => [...prev, aiResponse]);
      });
      return () => {
        socket.current.on("disconnect");
      };
    }
  }, [startChat]);

  const handelStartChat = () => {
    setStartChat(true);
  };
  const handelCloseChat = () => {
    setStartChat(false);
    socket.current.on("disconnect");
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg = { role: "user", message: inputMessage };
    setMessage((prev) => [...prev, userMsg]);

    socket.current.emit("ai-message", inputMessage);
    setInputMessage("");
  };
  return (
    <div className='fixed bg-white rounded-xl overflow-hidden shadow-2xl   z-50 bottom-10  right-20 '>
      {startChat ?
        <div className='h-96 w-72 '>
          <div className='h-1/12 bg-linear-to-r from-Deep-Navy-Blue to-cyan-500 text-white text-center flex justify-between px-4  items-center'>
            <h1 className='font-semibold text-sm'>GoShop Start Conversion</h1>
            <span
              onClick={handelCloseChat}
              className='text-white  cursor-pointer'>
              <IoIosCloseCircle className='size-6' />
            </span>
          </div>
          <div className='h-9/12 p-2 overflow-y-scroll scroll-smooth relative'>
            {message.length === 0 ?
              <p className='text-lg text-gray-400 justify-center absolute top-[50%] left-[50%] -translate-[50%]  '>
                Start Conversion
              </p>
            : message.map((mess, i) => (
                <div
                  className={`max-w-[80%] p-2 rounded-lg text-xs font-semibold w-fit mt-1
                 ${mess.role === "model" ? "bg-cyan-700 text-white justify-self-start rounded-bl-none" : "bg-cyan-200 text-gray-800 justify-self-end rounded-br-none"}`}
                  key={i}>
                  <div className='prose prose-sm prose-slate max-w-none'>
                    <ReactMarkdown>{mess.message}</ReactMarkdown>
                  </div>
                </div>
              ))
            }
            <div ref={scrollRef} />
          </div>
          <form
            onSubmit={handleSendMessage}
            className='h-2/12 px-2 w-full gap-1 items-center flex'>
            <input
              onChange={(e) => setInputMessage(e.target.value)}
              value={inputMessage}
              className='border-cyan-600 rounded shadow-lg p-1 border-2 w-9/12 outline-cyan-500'
              type='text'
            />

            <button
              type='submit'
              className='bg-linear-to-r py-1 from-Deep-Navy-Blue to-cyan-500 text-white px-4  rounded cursor-pointer'>
              Send
            </button>
          </form>
        </div>
      : <div className='rounded-full  cursor-pointer'>
          <img
            onClick={handelStartChat}
            className='bg-cover w-20 p-5 h-20'
            src='https://ik.imagekit.io/shradhanand/GoShop/AI/goShop-AI-removebg-preview.png'
            alt='ai-chat-bot'
          />
        </div>
      }
    </div>
  );
}

export default AiChatBot;
