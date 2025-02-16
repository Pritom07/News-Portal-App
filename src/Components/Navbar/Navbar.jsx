import { NavLink, useNavigate } from "react-router-dom";
import user from "../../assets/user.png";
import navlogo from "../../assets/nav-logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const listitems = (
    <>
      <li className="font-Poppins text-[18px] text-[#706F6F]">
        <NavLink to="">Home</NavLink>
      </li>
      <li className="font-Poppins text-[18px] text-[#706F6F]">
        <NavLink to="">About</NavLink>
      </li>
      <li className="font-Poppins text-[18px] text-[#706F6F]">
        <NavLink to="">Career</NavLink>
      </li>
    </>
  );

  const handleLogin = () => {
    navigate("/auth/login");
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <img src={navlogo} className="w-7 inline" />
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {listitems}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{listitems}</ul>
        </div>
        <div className="navbar-end">
          <img src={user} className="mr-2" />
          <button onClick={handleLogin} className="btn bg-black text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
