import { NavLink } from "react-router";

export default function Nav({ route, name }) {
  return (
    <>
      <NavLink className='text-4xl lg:text-xl w-fit mx-auto' to={route}>
        {name}
      </NavLink>
    </>
  );
}
