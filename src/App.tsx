import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./scss/app.scss";

import Home from "./pages/Home";

import MainLayout from "./layouts/MainLayout";
import { Oval } from "react-loader-spinner";

const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart" */ "./pages/Cart")
);
const FullPizza = React.lazy(
  () => import(/* webpackChunkName: "FullPizza" */ "./pages/FullPizza")
);
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <Oval
                  visible={true}
                  height="80"
                  width="80"
                  color="#b5b5b5"
                  secondaryColor="#ccc"
                  ariaLabel="oval-loading"
                  wrapperStyle={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                  }}
                />
              }>
              <NotFound />
            </Suspense>
          }
        />
        <Route index path="" element={<Home />} />
        <Route
          index
          path="cart"
          element={
            <Suspense
              fallback={
                <Oval
                  visible={true}
                  height="80"
                  width="80"
                  color="#b5b5b5"
                  secondaryColor="#ccc"
                  ariaLabel="oval-loading"
                  wrapperStyle={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                  }}
                />
              }>
              <Cart />
            </Suspense>
          }
        />
        <Route
          index
          path="pizza/:id"
          element={
            <Suspense
              fallback={
                <Oval
                  visible={true}
                  height="80"
                  width="80"
                  color="#b5b5b5"
                  secondaryColor="#ccc"
                  ariaLabel="oval-loading"
                  wrapperStyle={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                  }}
                />
              }>
              <FullPizza />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
