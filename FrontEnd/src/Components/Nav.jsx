import { NavLink } from "react-router";

export default function Nav({ route, name, setMenu, menu }) {
  return (
    <>
      <NavLink
        onClick={() => setMenu(!menu)}
        className='text-4xl w-fit mx-auto mt-2'
        to={route}>
        {name}
      </NavLink>
    </>
  );
}
