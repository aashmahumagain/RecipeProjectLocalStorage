import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";

//Store=holds all the data of our application
//Globlized state
//action=descibes what we are gonna do
//reducers=describes how action gonna work
//dispatch
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
