import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalContext";

import LayoutLanding from "../widget/LayoutLanding";
import LayoutDashboard from "../widget/LayoutDashboard";

import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import DetailProduct from "../pages/DetailProduct";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import DashboardProductList from "../pages/DashboardProductList";
import DashboardForm from "../pages/DashboardForm";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";

const RouterApp = () => {
  return (
    <Router>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<LayoutLanding><Home /></LayoutLanding>} />
          <Route path="/list-product" element={<LayoutLanding><ProductList /></LayoutLanding>} />
          <Route path="/list-product/:idData" element={<LayoutLanding><DetailProduct /></LayoutLanding>} />
          <Route path="/login" element={<LayoutLanding><Login /></LayoutLanding>} />
          <Route path="/register" element={<LayoutLanding><Register /></LayoutLanding>} />
          <Route path="/dashboard" element={<LayoutDashboard><Dashboard /></LayoutDashboard>} />
          <Route path="/dashboard/list-product" element={<LayoutDashboard><DashboardProductList /></LayoutDashboard>} />
          <Route path="/dashboard/list-product/form" element={<LayoutDashboard><DashboardForm /></LayoutDashboard>} />
          <Route path="/dashboard/list-product/:id" element={<LayoutDashboard><DashboardForm /></LayoutDashboard>} />
          <Route path="/dashboard/profile" element={<LayoutDashboard><Profile /></LayoutDashboard>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalProvider>
    </Router>
  );
};

export default RouterApp;
