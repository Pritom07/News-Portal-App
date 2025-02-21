import { useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
  const dataObj = useLoaderData();
  const Data = dataObj.data[0];
  const { thumbnail_url, title, details, category_id } = Data;
  const navigate = useNavigate();

  const gotoCategory = () => {
    navigate(`/eachcategory/${category_id}`);
  };
  return (
    <div>
      <div className="card bg-base-100 border-2 border-slate-200 mt-2.5 mr-2">
        <figure>
          <img src={thumbnail_url} className="p-2 mt-1 w-full h-[500px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{title}</h2>
          <p className="text-[#706F6F] text-[16px]">{details}</p>
          <div className="card-actions justify-start">
            <button
              onClick={gotoCategory}
              className="btn bg-[#D72050] text-white"
            >
              <FaArrowLeftLong className="inline mr-1" />
              <span>All news in this category</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
