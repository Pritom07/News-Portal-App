import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import { ThemeContext } from "../../Provider/Provider";
import { toast } from "react-toastify";

const Register = () => {
  const { createAccount, updateUserProfile, userVerificationEmail } =
    useContext(ThemeContext);
  const navigate = useNavigate();

  const [seepass, Setseepass] = useState(true);
  const handleseepass = () => {
    Setseepass(!seepass);
  };

  const handlesignupform = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photourl = form.get("photourl");
    const email = form.get("email");
    const password = form.get("password");

    const userinfo = {
      displayName: name,
      photoURL: photourl,
    };

    createAccount(email, password)
      .then((result) => {
        updateUserProfile(userinfo)
          .then(() => {})
          .catch((err) => {});
        userVerificationEmail().then(() => {
          toast("A verification Message is sent in your given E-mail");
        });
        navigate("/auth/login");
      })
      .catch((err) => {});
  };
  return (
    <div className="-mt-3">
      <div className="hero">
        <div className="hero-content">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <div className="border-b-2 border-slate-300">
                <h1 className="font-semibold text-2xl text-center text-nowrap pb-5">
                  Register your Account
                </h1>
              </div>
              <form onSubmit={handlesignupform} className="mt-1.5">
                <fieldset className="fieldset">
                  <label className="fieldset-label">
                    Name
                    <FaStarOfLife className="text-[7px] text-red-800 font-extrabold" />
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Name"
                    name="name"
                    required
                  />
                  <label className="fieldset-label">PhotoURL</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="PhotoURL"
                    name="photourl"
                  />
                  <label className="fieldset-label">
                    Email
                    <FaStarOfLife className="text-[7px] text-red-800 font-extrabold" />
                  </label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                    required
                  />
                  <label className="fieldset-label">
                    Password
                    <FaStarOfLife className="text-[7px] text-red-800 font-extrabold" />
                  </label>
                  <input
                    type={seepass ? "password" : "text"}
                    className="input"
                    placeholder="Password"
                    name="password"
                    required
                  />

                  <div
                    onClick={handleseepass}
                    className="relative bottom-8 left-60 text-[15px] cursor-pointer"
                  >
                    {seepass ? <FaEye /> : <FaEyeSlash />}
                  </div>

                  <button className="btn w-full bg-blue-700 text-white mt-1">
                    SignUp
                  </button>
                </fieldset>
              </form>
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

export default Register;
