import { useEffect, useState } from "react";
import Eachcategory from "../Eachcategory/Eachcategory";

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
        <ul className="flex flex-col">
          {categories.map((category) => (
            <Eachcategory
              key={category.category_id}
              category={category}
            ></Eachcategory>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Allcategory;
