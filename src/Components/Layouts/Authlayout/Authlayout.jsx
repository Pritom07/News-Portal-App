import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const Authlayout = () => {
  return (
    <div className="mt-1 max-w-7xl mx-auto">
      <section>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Authlayout;
