import { Outlet } from "react-router-dom";
import Allcategory from "../Allcategory/Allcategory";
import LoginWithpart from "../LoginWithpart/LoginWithpart";

const UnderNavsection = () => {
  return (
    <div className="mt-1">
      <section className="grid grid-cols-12">
        <aside className="col-span-3 px-1">
          <Allcategory></Allcategory>
        </aside>
        <section className="col-span-6 font-semibold text-xl px-1">
          Dragon News Home
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 px-2">
          <LoginWithpart></LoginWithpart>
        </aside>
      </section>
    </div>
  );
};

export default UnderNavsection;
