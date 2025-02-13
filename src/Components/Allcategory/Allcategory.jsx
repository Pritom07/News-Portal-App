import { useEffect, useState } from "react";
import Eachcategory from "../Eachcategory/Eachcategory";
import children from "../../assets/children.jpg";
import friends from "../../assets/friends.jpg";
import football from "../../assets/football.jpg";
import { SlCalender } from "react-icons/sl";
import moment from "moment";

const Allcategory = () => {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setcategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h1 className="font-semibold text-xl">All Category</h1>
      <section className="mt-3">
        <ul className="flex flex-col mb-2">
          {categories.map((category) => (
            <Eachcategory
              key={category.category_id}
              category={category}
            ></Eachcategory>
          ))}
        </ul>
      </section>
      <section className="grid grid-cols-1 gap-4 mt-6">
        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img src={children} />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="mt-2 flex">
              <p className="font-Poppins font-medium text-[17px]">Sports</p>
              <p className="text-[#9F9F9F] font-medium text-[17px]">
                <SlCalender className="inline mr-1" />
                <span>{moment().format("MMM D YYYY")}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img src={friends} />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="mt-2 flex">
              <p className="font-Poppins font-medium text-[17px]">Sports</p>
              <p className="text-[#9F9F9F] font-medium text-[17px]">
                <SlCalender className="inline mr-1" />
                <span>{moment().format("MMM D YYYY")}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src={football} />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="mt-2 flex">
              <p className="font-Poppins font-medium text-[17px]">Sports</p>
              <p className="text-[#9F9F9F] font-medium text-[17px]">
                <SlCalender className="inline mr-1" />
                <span>{moment().format("MMM D YYYY")}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Allcategory;
