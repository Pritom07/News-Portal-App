import { useContext } from "react";
import { ThemeContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";

const PrivateRouter = ({ children }) => {
  const { User, loading } = useContext(ThemeContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (User) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRouter;
