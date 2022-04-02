import React, {Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import routes from "../routes/routes";

const MainLayout = (props) => {
  //const { } = props;

  const getRoutes = () => {
    return routes.map((prop, index) => {
        return (
          <Route
            exact
            {...prop}
            key={index}
          />
        );
    });
  };

  return (
    <>
      <Suspense fallback={undefined}>
        <Routes>
          {getRoutes()}
          <Route path="/" element={<Navigate to="/itemList"/>}/>
        </Routes>
      </Suspense>
    </>
  );
};

export default MainLayout;
