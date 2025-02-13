import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const CategoryNews = () => {
  const dataObj = useLoaderData();
  const data = dataObj.data;

  return (
    <div className="grid grid-cols-1 mt-3">
      {data.map((newsItem) => (
        <NewsCard key={newsItem._id} news={newsItem} />
      ))}
    </div>
  );
};

export default CategoryNews;
