import React, { lazy, Suspense, useState } from "react";
import "./index.css";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Contact from "./Component/Contact ";
import Error from "./Component/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";
import RestaurentMenu from "./Component/RestaurentMenu";
import UserContex from "./Component/UserContex";
import { Provider } from "react-redux";
import appStore from "./Utill/appStore";
import Cart from './Component/Cart';
import Footer from "./Component/Footer";
import Login from "./Component/Login";

const App = () => {
  const [UserName, setUserName] = useState();
  useState(() => {
    const data = {
      name: "maurya khushi",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContex.Provider value={{ logdenUser: UserName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContex.Provider>
    </Provider>
  );
};
const About = lazy(() => import("./Component/About"));
// const Contact= lazy(()=>import("./Component/Contact"))
// const Cart = lazy(() => import("./Component/Cart"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path : "/cartpage",
        element : <Cart />
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },

      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
