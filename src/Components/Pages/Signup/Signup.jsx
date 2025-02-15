import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";

const Signup = () => {
  const [seepass, Setseepass] = useState(true);
  const handleseepass = () => {
    Setseepass(!seepass);
  };
  return (
    <div className="mt-1">
      <div className="hero">
        <div className="hero-content">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">
                  Name
                  <FaStarOfLife className="text-[7px] text-red-800 font-extrabold" />
                </label>
                <input type="text" className="input" placeholder="Name" />
                <label className="fieldset-label">PhotoURL</label>
                <input type="text" className="input" placeholder="PhotoURL" />
                <label className="fieldset-label">
                  Email
                  <FaStarOfLife className="text-[7px] text-red-800 font-extrabold" />
                </label>
                <input type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">
                  Password
                  <FaStarOfLife className="text-[7px] text-red-800 font-extrabold" />
                </label>
                <input
                  type={seepass ? "password" : "text"}
                  className="input"
                  placeholder="Password"
                />

                <div
                  onClick={handleseepass}
                  className="relative bottom-8 left-60 text-[15px] cursor-pointer"
                >
                  {seepass ? <FaEye /> : <FaEyeSlash />}
                </div>

                <button className="btn w-full bg-blue-700 text-white mt-1">
                  Login
                </button>
              </fieldset>
              <p className="text-[16px]">
                Already have an account? go to
                <span className="ml-1 text-green-700 font-medium">
                  <Link to="/auth/login">LogIn</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
