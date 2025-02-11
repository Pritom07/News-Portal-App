import moment from "moment";

const Heading = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col justify-center items-center mt-1 font-Poppins">
        <h1 className="font-Berkshire text-6xl">The NewsPortal App</h1>
        <p className="text-[#706F6F] text-xl font-medium mt-0.5">
          Journalism Without Fear or Favour
        </p>
        <p className="font-medium text-xl mt-0.5">
          {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </p>
      </div>
    </div>
  );
};

export default Heading;
