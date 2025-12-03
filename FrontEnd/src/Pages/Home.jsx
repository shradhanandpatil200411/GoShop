import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { asyncLogOutUserAction } from "../Store/Actions/userActions";

function Home() {
  const { data } = useSelector((store) => store?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelLogout = (navigate) => {
    dispatch(asyncLogOutUserAction(navigate));
  };

  return (
    <>
      <div className=' h-screen text-4xl w-full pt-20'>
        Welcome {data?.fullName?.firstName} {data?.fullName?.lastName}
        <NavLink
          to='/create-product'
          className='px-4 py-2 text-white bg-green-400 rounded-lg text-xl mx-4'>
          Create Product
        </NavLink>
        <button
          className='px-4 py-2 text-white bg-Bright-Orange rounded-lg text-xl mx-4'
          onClick={() => handelLogout(navigate)}>
          Logout
        </button>
      </div>
    </>
  );
}

export default Home;
