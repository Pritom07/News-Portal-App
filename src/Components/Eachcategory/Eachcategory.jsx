import { NavLink } from "react-router-dom";

const Eachcategory = ({ category }) => {
  const { category_id, category_name } = category;
  return (
    <NavLink
      to={`/eachcategory/${category_id}`}
      className="bg-base-200 m-1 py-2 text-[#9F9F9F] font-medium text-xl cursor-pointer text-center"
    >
      {category_name}
    </NavLink>
  );
};

export default Eachcategory;
