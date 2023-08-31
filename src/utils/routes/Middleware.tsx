import { Outlet } from "react-router-dom";

const Middleware = () => {
  try {
    if (!localStorage.theme) {
      localStorage.theme = "dark";
    }
  } catch (error) {}
  // console.log("MiddleWare active");
  return <Outlet />;
};

export default Middleware;
