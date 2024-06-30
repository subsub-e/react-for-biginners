import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Coin from "./components/Coin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Coin />
  </React.StrictMode>
);
