import React from "react";
import { Route, Routes } from "react-router-dom";
import FormPage from "../components/FormPage";
import TopNav from "../components/TopNav";

const Routerss = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TopNav />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
};

export default Routerss;
