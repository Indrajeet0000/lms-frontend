//css import
import "./index.css";
//component import
import App from "./App.jsx";
//library
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Toaster/>
  </BrowserRouter>
);
