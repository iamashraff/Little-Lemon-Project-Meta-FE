import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../../pages/Home/Home";
import Booking from "../../pages/Booking/Booking";

function PageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" />
          <Route path="menu" />
          <Route path="reservations" element={<Booking />} />
          <Route path="order-online" />
          <Route path="login" />
        </Route>
      </Routes>
    </Router>
  );
}

export default PageRoutes;
