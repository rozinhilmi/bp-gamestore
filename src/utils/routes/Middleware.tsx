import { Outlet } from "react-router-dom";

const Middleware = () => {
  console.log("MiddleWare active");
  return <Outlet />;
};

export default Middleware;
