import React from "react";
import ReactDOM from "react-dom/client";
import smoothscroll from "smoothscroll-polyfill";
import "./index.css";
import App from "./App";

// Initialize smooth scroll polyfill for cross-browser support
smoothscroll.polyfill();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
