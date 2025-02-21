import { Outlet } from "react-router-dom";
import Heading from "../../Heading/Heading";
import LoginWithpart from "../../LoginWithpart/LoginWithpart";

const Newslayout = () => {
  return (
    <div className="max-w-7xl mx-auto mt-1">
      <Heading></Heading>
      <div className="grid grid-cols-12 gap-2 mt-3">
        <section className="col-span-9">
          <h1 className="font-semibold text-xl">Dragon News</h1>
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <LoginWithpart></LoginWithpart>
        </aside>
      </div>
    </div>
  );
};

export default Newslayout;
