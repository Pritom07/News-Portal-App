import { FaEye } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, author, title, thumbnail_url, details, rating, total_view } =
    news;
  const navigate = useNavigate();

  const ShowNewsDetails = () => {
    navigate(`/news/${_id}`);
  };

  return (
    <div
      onClick={ShowNewsDetails}
      className="bg-white shadow-md space-y-3 mb-4"
    >
      <div className="flex justify-between items-center bg-slate-100 px-2 py-2.5">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-gray-500 text-sm">{author.published_date}</p>
          </div>
        </div>
        <div className="flex items-center text-[#706F6F]">
          <FaRegBookmark className="mr-2" />
          <IoShareSocialOutline />
        </div>
      </div>

      <div className="px-4 cursor-pointer">
        <h2 className="text-lg font-bold">{title}</h2>

        <img
          src={thumbnail_url}
          alt="News"
          className="rounded-xl w-full h-60 mt-3.5 object-cover"
        />

        <p className="text-[#706F6F] text-[16px] mt-2.5">
          {details
            ? details.slice(0, 200) + "... "
            : "No description available"}
          <span className="text-[#FF8C47]">Read more</span>
        </p>

        <div className="flex items-center justify-between text-gray-600 mt-5 border-t-2 border-slate-200 py-4">
          <div className="flex items-center space-x-1">
            <FaStar className="text-[#FF8C47]" />
            <FaStar className="text-[#FF8C47]" />
            <FaStar className="text-[#FF8C47]" />
            <FaStar className="text-[#FF8C47]" />
            <FaStar className="text-[#FF8C47]" />
            <span className="text-[#706F6F] text-[18px] ml-1.5">
              {rating.number}
            </span>
          </div>
          <div className="flex items-center space-x-1 text-[#706F6F] text-[18px]">
            <FaEye className="mr-3" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
