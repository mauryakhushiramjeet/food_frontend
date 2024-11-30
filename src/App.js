import React, { lazy, Suspense, useState } from "react";
import "./index.css";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Contact from "./Component/Contact ";
import Error from "./Component/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";
import RestaurentMenu from "./Component/RestaurentMenu";
import UserContex from "./Component/UserContex";
import { Provider, useSelector } from "react-redux";
import appStore from "./Utill/appStore";
import Cart from "./Component/Cart";
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import { ToastContainer } from "react-toastify";
export const backendUrl = process.env.REACT_APP_BACKEND_URL;

// import { ToastContainer, toast, cssTransition } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const slideRightToLeft = cssTransition({
//   enter: "slide-enter",
//   exit: "slide-exit",
//   duration: [5000, 500], // Animation durations (enter and exit)
// });
const App = () => {
  const isLongIn = useSelector((store) => store.login.isLogin);

  const [UserName, setUserName] = useState();
  useState(() => {
    const data = {
      name: "maurya khushi",
    };
    setUserName(data.name);
  }, []);
  return (
    <div className="app">
      <ToastContainer
      // position="top-right"
      // autoClose={3000}
      // hideProgressBar={true}
      // closeOnClick
      // pauseOnHover
      // draggable
      // toastStyle={{
      //   fontSize: "12px",
      //   padding: "8px",
      //   maxWidth: "20px",
      // }}
      />
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
};
const About = lazy(() => import("./Component/About"));
// const Contact= lazy(()=>import("./Component/Contact"))
// const Cart = lazy(() => import("./Component/Cart"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [
      {
        path: "/",
        element: <Login />,
      },

      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cartpage",
        element: <Cart />,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
