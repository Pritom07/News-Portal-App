import { IoLogoGoogle } from "react-icons/io";
import { AiOutlineGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import swimming from "../../assets/swimming.png";
import classpng from "../../assets/class.png";
import playground from "../../assets/playground.png";
import backphoto from "../../assets/bg.png";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { ThemeContext } from "../Provider/Provider";

const LoginWithpart = () => {
  const { googleLogin, githubLogin } = useContext(ThemeContext);
  const [error, seterror] = useState(" ");
  const Googleprovider = new GoogleAuthProvider();
  const Githubprovider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    seterror(" ");
    googleLogin(Googleprovider)
      .then((res) => {})
      .catch((err) => {
        seterror(err.message);
      });
  };

  const handleGithubLogin = () => {
    seterror(" ");
    githubLogin(Githubprovider)
      .then((res) => {})
      .catch((err) => {
        seterror(err.message);
      });
  };
  return (
    <div>
      <h1 className="font-semibold text-xl">Login With</h1>
      <section className="mt-3">
        <div className="flex flex-col">
          <button
            onClick={handleGoogleLogin}
            className="border-2 border-blue-700 text-blue-700 font-semibold py-1.5 rounded-[5px] cursor-pointer"
          >
            <IoLogoGoogle className="inline text-blue-700 mr-1" />
            Login with Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="border-2 border-black font-semibold py-1.5 rounded-[5px] mt-2.5 cursor-pointer"
          >
            <AiOutlineGithub className="inline mr-1" />
            Login with Github
          </button>
        </div>
        {error && (
          <p className="text-red-700 text-[18px] font-semibold mt-1">{error}</p>
        )}
        <h1 className="mt-10 font-semibold text-xl">Find Us On</h1>
        <div className="join justify-start join-vertical w-full mt-3">
          <button className="btn join-item justify-start text-[#706F6F] font-medium text-[16px] py-8">
            <FaFacebook className="text-[#3B599C]" />
            Facebook
          </button>
          <button className="btn join-item justify-start text-[#706F6F] font-medium text-[16px] py-8">
            <FaSquareXTwitter className="text-black" />
            Twitter
          </button>
          <button className="btn join-item justify-start text-[#706F6F] font-medium text-[16px] py-8">
            <FaInstagramSquare className="insta" />
            Instagram
          </button>
        </div>
      </section>
      <section className="bg-slate-100 mt-11 rounded-[6px]">
        <p className="font-semibold text-xl pl-3 pt-3">Q-Zone</p>
        <div className="grid grid-cols-1 gap-3 px-4 mt-3 pb-5">
          <img src={swimming} />
          <img src={classpng} />
          <img src={playground} />
        </div>
      </section>
      <section className="mt-5 mb-4">
        <img src={backphoto} className="w-full" />
      </section>
    </div>
  );
};

export default LoginWithpart;
