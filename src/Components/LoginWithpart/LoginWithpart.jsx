import { IoLogoGoogle } from "react-icons/io";
import { AiOutlineGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import swimming from "../../assets/swimming.png";
import classpng from "../../assets/class.png";
import playground from "../../assets/playground.png";
import backphoto from "../../assets/bg.png";

const LoginWithpart = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl">Login With</h1>
      <section className="mt-3">
        <div className="flex flex-col">
          <button className="border-2 border-blue-700 text-blue-700 font-semibold py-1.5 rounded-[5px]">
            <IoLogoGoogle className="inline text-blue-700 mr-1" />
            Login with Google
          </button>
          <button className="border-2 border-black font-semibold py-1.5 rounded-[5px] mt-2.5">
            <AiOutlineGithub className="inline mr-1" />
            Login with Github
          </button>
        </div>
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
