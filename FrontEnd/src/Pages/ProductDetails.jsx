import { useLocation } from "react-router";

export default function ProductDetails() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div className='text-black pt-20 h-screen'>vicky</div>
    </>
  );
}
