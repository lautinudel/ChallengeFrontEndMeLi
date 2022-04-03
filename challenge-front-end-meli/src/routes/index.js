import React, {Suspense} from 'react';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import routes from "./routes";

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


export default (
  <BrowserRouter>
    <Suspense fallback={undefined}>
      <Routes>
        {getRoutes()}
        <Route exact path="/" element={<Navigate to="/itemList" />}/>
        <Route path="*" element={<Navigate to="/itemList" />}/>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
