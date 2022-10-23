import React from "react";
import { BroserRouter as Router, Routes, Route } from "react-router-dom";

const routes = [];

export const MyRoutes = () => (
  <Router>
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          element={<route.element />}
        />
      ))}
    </Routes>
  </Router>
);
