import React, {Suspense} from 'react';
import {Route, Routes,/* Navigate ,*/ BrowserRouter} from 'react-router-dom';
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
      </Routes>
    </Suspense>
  </BrowserRouter>
);
