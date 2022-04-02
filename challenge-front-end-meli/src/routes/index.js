import React, {Suspense} from 'react';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import routes from "./routes";
import SearchBarView from '../components/SearchBar/searchBarView.';

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
      <SearchBarView />
      <Routes>
        {getRoutes()}
        <Route exact path="/" element={<Navigate to="/itemList" />}/>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
