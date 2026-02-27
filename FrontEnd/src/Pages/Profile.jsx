import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogOutUserAction } from "../Store/Actions/userActions";
import { useNavigate } from "react-router";
import MyOrder from "../Components/MyOrder";
import { useState } from "react";
import EditProfile from "../Components/EditProfile";

function Profile() {
  const [toggleTab, setToggleTab] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user?.data);
  const handelLogout = () => {
    dispatch(asyncLogOutUserAction(navigate));
  };

  return (
    <>
      <div className='pt-20 text-white h-screen p-10 flex gap-10'>
        <div className='border w-[30%] p-5 flex justify-between flex-col'>
          <div className='bg-Deep-Navy-Blue p-5'>
            <div>
              <CgProfile className='size-14 cursor-pointer' />
              <h1>
                <span>{user?.fullName?.firstName} </span>
                <span>{user?.fullName?.lastName}</span>
              </h1>
            </div>

            <h1>{user?.email}</h1>
          </div>
          <div
            onClick={() => setToggleTab(1)}
            className='border px-4 py-2 text-sm cursor-pointer'>
            <h1>My Order</h1>
          </div>

          <div
            onClick={() => setToggleTab(0)}
            className='border px-4 py-2 text-sm cursor-pointer'>
            <h1>Edit Profile</h1>
          </div>

          <button
            onClick={handelLogout}
            className='bg-red-400 rounded-xl px-3 py-2 font-semibold text-lg cursor-pointer w-full'>
            LogOut
          </button>
        </div>
        <div className='border w-[70%] p-10'>
          {toggleTab ?
            <MyOrder />
          : <EditProfile />}
        </div>
      </div>
    </>
  );
}

export default Profile;
