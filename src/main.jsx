// ------------------------------------------------------------
// main.jsx - the starting point of the app.
// ------------------------------------------------------------
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter turns on routing (reading the URL) */}
    <BrowserRouter>
      {/* AuthProvider shares the logged-in user with every page */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
