import Marquee from "react-fast-marquee";
import Heading from "../../Heading/Heading";
import Navbar from "../../Navbar/Navbar";
import UnderNavsection from "../../UnderNavsection/UnderNavsection";

const Homelayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <Heading></Heading>
        <section className="flex items-center bg-[#F3F3F3] p-2 rounded-[5px] mt-6">
          <button className="bg-red-700 text-white px-3 py-2 mr-2 font-semibold">
            Latest
          </button>
          <Marquee
            pauseOnHover={true}
            className="font-semibold text-[#403F3F] text-[18px] cursor-pointer"
          >
            <p>Trump Announces 25% Tariffs on Foreign Steel and Aluminum.</p>
            <p className="ml-2">
              Elon Musk-Led Group Makes Surprise Bid of Nearly $100 Billion for
              OpenAI.
            </p>
            <p className="ml-2">
              Performer in Kendrick Lamar’s Super Bowl Show Faces No Charges
              After Waving Sudan-Gaza Flag.
            </p>
            <p className="ml-2">
              Google Maps, FAA Officially Acknowledge Gulf of America After
              Trump Declaration.
            </p>
          </Marquee>
        </section>
      </header>
      <nav className="mt-1">
        <Navbar></Navbar>
      </nav>
      <main className="mt-3">
        <UnderNavsection></UnderNavsection>
      </main>
    </div>
  );
};

export default Homelayout;
