import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../Provider/Provider";
import { toast } from "react-toastify";

const Loginpage = () => {
  const { signInAccount, passResetEmail } = useContext(ThemeContext);
  const [error, Seterror] = useState(" ");
  const navigate = useNavigate();
  const emailref = useRef(null);
  const location = useLocation();
  console.log(location);

  const [seepass, Setseepass] = useState(true);
  const handleseepass = () => {
    Setseepass(!seepass);
  };

  const handlesigninform = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    Seterror(" ");

    signInAccount(email, password)
      .then((result) => {
        if (!result.user.emailVerified) {
          Seterror("E-mail is not verified !");
          return;
        } else {
          {
            location?.state ? navigate(location?.state) : navigate("/");
          }
        }
      })
      .catch((err) => {
        Seterror(err.message);
      });
  };

  const handleforgetpass = () => {
    const email = emailref.current.value;
    passResetEmail(email)
      .then(() => {
        toast.success("Check your E-mail to reset your Password");
      })
      .catch((err) => {
        Seterror(err.message);
      });
  };
  return (
    <div className="mt-1">
      <div className="hero">
        <div className="hero-content">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body border-2 border-slate-100">
              <div className="border-b-2 border-slate-300">
                <h1 className="font-semibold text-2xl text-center text-nowrap pb-5">
                  LogIn your Account
                </h1>
              </div>
              <form onSubmit={handlesigninform} className="mt-1.5">
                <fieldset className="fieldset">
                  <label className="fieldset-label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                    ref={emailref}
                    required
                  />
                  <label className="fieldset-label">Password</label>
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

                  <div onClick={handleforgetpass}>
                    <a className="link link-hover text-[15px]">
                      Forgot password?
                    </a>
                  </div>
                  <button className="btn w-full bg-green-700 text-white mt-3">
                    Login
                  </button>
                </fieldset>
              </form>
              <p className="text-[16px]">
                Don't have an account? go to
                <span className="ml-1 text-red-700 font-medium">
                  <Link to="/auth/register">Register</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {error && (
        <p className="text-red-700 text-xl font-semibold flex justify-center items-center">
          {error}
        </p>
      )}
    </div>
  );
};

export default Loginpage;
