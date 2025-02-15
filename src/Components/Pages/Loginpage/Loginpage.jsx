import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Loginpage = () => {
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
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
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

                <div>
                  <a className="link link-hover text-[15px]">
                    Forgot password?
                  </a>
                </div>
                <button className="btn w-full bg-green-700 text-white mt-3">
                  Login
                </button>
              </fieldset>
              <p className="text-[16px]">
                Don't have an account? go to
                <span className="ml-1 text-red-700 font-medium">
                  <Link to="/auth/signup">SignUp</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
