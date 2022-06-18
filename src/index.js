import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Activates { Route } in "App.js"

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Activates { Route } in "App.js"
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
